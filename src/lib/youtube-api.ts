// YouTube Data API v3 integration
// Fetches videos and shorts from the Best Roofing Now YouTube channel

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailHigh: string;
  publishedAt: string;
  channelTitle: string;
  isShort: boolean;
  duration?: string;
  viewCount?: string;
  likeCount?: string;
}

export interface YouTubeChannel {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

// Channel ID for Best Roofing Now
// To find your channel ID: Go to YouTube > Your channel > View page source > search for "channelId"
// Or use the YouTube API to get it from the channel handle (@bestroofingnowllc)
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || '';

// Channel handle for fallback lookup
const CHANNEL_HANDLE = 'bestroofingnowllc';

// Get the uploads playlist ID from a channel ID
// YouTube uses UU + channelId (minus UC) for uploads playlist
function getUploadsPlaylistId(channelId: string): string {
  if (channelId.startsWith('UC')) {
    return 'UU' + channelId.substring(2);
  }
  return channelId;
}

// Get channel ID from handle (e.g., @bestroofingnowllc)
async function getChannelIdFromHandle(apiKey: string): Promise<string | null> {
  try {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${apiKey}`;
    const response = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24 hours

    if (!response.ok) {
      console.error('YouTube API: Failed to get channel ID from handle');
      return null;
    }

    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items[0].id;
    }
    return null;
  } catch (error) {
    console.error('YouTube API: Error getting channel ID from handle:', error);
    return null;
  }
}

// Get the effective channel ID (from env or lookup by handle)
async function getEffectiveChannelId(apiKey: string): Promise<string | null> {
  if (CHANNEL_ID) {
    return CHANNEL_ID;
  }
  return getChannelIdFromHandle(apiKey);
}

// Fetch channel info
export async function fetchChannelInfo(): Promise<YouTubeChannel | null> {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    console.error('YouTube API: GOOGLE_API_KEY not set');
    return null;
  }

  try {
    const channelId = await getEffectiveChannelId(apiKey);
    if (!channelId) {
      console.error('YouTube API: Could not determine channel ID');
      return null;
    }

    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`;
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
      console.error('YouTube API error:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      console.error('YouTube API: Channel not found');
      return null;
    }

    const channel = data.items[0];
    return {
      id: channel.id,
      title: channel.snippet.title,
      description: channel.snippet.description,
      thumbnailUrl: channel.snippet.thumbnails.default.url,
      subscriberCount: channel.statistics.subscriberCount,
      videoCount: channel.statistics.videoCount,
      viewCount: channel.statistics.viewCount,
    };
  } catch (error) {
    console.error('YouTube API fetch error:', error);
    return null;
  }
}

// Fetch videos from the channel
export async function fetchChannelVideos(maxResults: number = 20): Promise<YouTubeVideo[]> {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    console.error('YouTube API: GOOGLE_API_KEY not set');
    return [];
  }

  try {
    const channelId = await getEffectiveChannelId(apiKey);
    if (!channelId) {
      console.error('YouTube API: Could not determine channel ID');
      return [];
    }

    // First, search for videos from the channel
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`;
    const searchResponse = await fetch(searchUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!searchResponse.ok) {
      console.error('YouTube API search error:', searchResponse.status, searchResponse.statusText);
      return [];
    }

    const searchData = await searchResponse.json();

    if (!searchData.items || searchData.items.length === 0) {
      return [];
    }

    // Get video IDs to fetch additional details (duration, view count, etc.)
    const videoIds = searchData.items.map((item: { id: { videoId: string } }) => item.id.videoId).join(',');

    // Fetch video details including content details (for duration) and statistics
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`;
    const detailsResponse = await fetch(detailsUrl, { next: { revalidate: 3600 } });

    let videoDetails: Record<string, { duration: string; viewCount: string; likeCount: string }> = {};

    if (detailsResponse.ok) {
      const detailsData = await detailsResponse.json();
      videoDetails = detailsData.items.reduce((acc: Record<string, { duration: string; viewCount: string; likeCount: string }>, item: { id: string; contentDetails: { duration: string }; statistics: { viewCount: string; likeCount: string } }) => {
        acc[item.id] = {
          duration: item.contentDetails.duration,
          viewCount: item.statistics.viewCount,
          likeCount: item.statistics.likeCount,
        };
        return acc;
      }, {});
    }

    // Map to our video interface
    return searchData.items.map((item: { id: { videoId: string }; snippet: { title: string; description: string; thumbnails: { default: { url: string }; high: { url: string } }; publishedAt: string; channelTitle: string } }) => {
      const videoId = item.id.videoId;
      const details = videoDetails[videoId] || {};

      // Determine if it's a Short based on duration (60 seconds or less)
      const isShort = isYouTubeShort(details.duration);

      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails.default.url,
        thumbnailHigh: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
        isShort,
        duration: formatDuration(details.duration),
        viewCount: formatViewCount(details.viewCount),
        likeCount: details.likeCount,
      };
    });
  } catch (error) {
    console.error('YouTube API fetch error:', error);
    return [];
  }
}

// Parse ISO 8601 duration and check if it's a Short (60 seconds or less)
function isYouTubeShort(duration: string | undefined): boolean {
  if (!duration) return false;

  // ISO 8601 duration format: PT1M30S, PT45S, etc.
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return false;

  const hours = parseInt(match[1] || '0', 10);
  const minutes = parseInt(match[2] || '0', 10);
  const seconds = parseInt(match[3] || '0', 10);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds <= 60;
}

// Format ISO 8601 duration to readable format (e.g., "5:30")
function formatDuration(duration: string | undefined): string {
  if (!duration) return '';

  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '';

  const hours = parseInt(match[1] || '0', 10);
  const minutes = parseInt(match[2] || '0', 10);
  const seconds = parseInt(match[3] || '0', 10);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Format view count to readable format (e.g., "1.2K", "3.5M")
function formatViewCount(viewCount: string | undefined): string {
  if (!viewCount) return '';

  const count = parseInt(viewCount, 10);
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return count.toString();
}

// Get watch URL for a video
export function getVideoUrl(videoId: string, isShort: boolean = false): string {
  if (isShort) {
    return `https://www.youtube.com/shorts/${videoId}`;
  }
  return `https://www.youtube.com/watch?v=${videoId}`;
}

// Get embed URL for a video
export function getEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

// Fallback videos in case API fails or is not configured
export const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: 'dQw4w9WgXcQ', // Placeholder - replace with actual video IDs
    title: 'Charlotte Roof Inspection - What We Look For',
    description: 'Watch how Best Roofing Now performs a thorough roof inspection for Charlotte homeowners.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/default.jpg',
    thumbnailHigh: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    publishedAt: '2024-01-01T00:00:00Z',
    channelTitle: 'Best Roofing Now',
    isShort: false,
    duration: '5:30',
    viewCount: '1.2K',
  },
];
