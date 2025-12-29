# WordPress to Vercel Migration Guide

This guide walks you through migrating your WordPress site to use Vercel for the frontend while keeping WordPress as a headless CMS.

## What's Already Done

I've configured your Next.js site with:

1. **Redirect configuration** in `next.config.ts`:
   - 35+ duplicate blog post redirects (posts ending in -2, -3, -4)
   - Service page redirects
   - Location page redirects
   - Misc page redirects

2. **Environment variable support** for WordPress CMS URL
3. **Image remote patterns** configured for both current and future subdomain

---

## Migration Steps

### Phase 1: Prepare Your Hosting (Do This First)

#### Step 1.1: Set Up WordPress Subdomain

You need to move WordPress to a subdomain so visitors see the fast Vercel site, not WordPress.

**Option A: If using managed WordPress hosting (WP Engine, Kinsta, etc.):**
1. Contact your host to set up `cms.bestroofingnow.com` as a domain alias
2. They'll handle the SSL certificate

**Option B: If self-hosting or using cPanel:**
1. Log into your hosting control panel
2. Go to **Domains** → **Subdomains**
3. Create subdomain: `cms.bestroofingnow.com`
4. Point it to your existing WordPress installation folder
5. Set up SSL for the subdomain (use Let's Encrypt or your host's SSL)

#### Step 1.2: Update WordPress Settings

1. Log into WordPress Admin
2. Go to **Settings** → **General**
3. Change both URLs:
   - WordPress Address (URL): `https://cms.bestroofingnow.com`
   - Site Address (URL): `https://cms.bestroofingnow.com`
4. Click **Save Changes**

**Important:** After this change, you'll access WordPress admin at:
`https://cms.bestroofingnow.com/wp-admin`

---

### Phase 2: Deploy to Vercel

#### Step 2.1: Push Your Code

```bash
git add .
git commit -m "Add WordPress migration configuration"
git push origin main
```

#### Step 2.2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

#### Step 2.3: Configure Environment Variables in Vercel

1. In your Vercel project, go to **Settings** → **Environment Variables**
2. Add these variables:

| Name | Value |
|------|-------|
| `WORDPRESS_API_URL` | `https://cms.bestroofingnow.com/wp-json/wp/v2` |
| `WORDPRESS_HOSTNAME` | `cms.bestroofingnow.com` |

3. Click **Save**
4. Go to **Deployments** → click the three dots on latest → **Redeploy**

---

### Phase 3: Update DNS

#### Step 3.1: Get Vercel IP/CNAME

1. In Vercel project, go to **Settings** → **Domains**
2. Add your domain: `bestroofingnow.com`
3. Vercel will show you the required DNS records

#### Step 3.2: Update Your DNS Records

Log into your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) and update:

**For root domain (bestroofingnow.com):**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP - verify in your Vercel dashboard)
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Keep your cms subdomain pointing to WordPress:**
```
Type: A or CNAME
Name: cms
Value: [your WordPress server IP or host]
```

#### Step 3.3: Wait for DNS Propagation

- DNS changes can take 1-48 hours to propagate globally
- Use [dnschecker.org](https://dnschecker.org) to monitor propagation
- Test by visiting your domain - you should see the Vercel site

---

### Phase 4: Clean Up Duplicates in WordPress (Optional but Recommended)

You have several duplicate posts in WordPress. While the redirects handle this, cleaning them up is better for your CMS.

**Duplicate posts to delete (keep the version WITHOUT the number suffix):**

| Keep This | Delete These |
|-----------|--------------|
| `new-homeowner-5-roofing-facts-you-must-know` | `-2`, `-3` versions |
| `modern-metal-roof-styles-photo-catalog-color-guide` | `-2`, `-3` versions |
| `selling-your-home-use-this-roofing-checklist-to-impress-buyers` | `-2`, `-3` versions |
| `how-financing-works-for-full-roof-replacement...` | `-2`, `-3`, `-4` versions |
| `why-you-shouldnt-waive-your-deductible` | `-2` version |
| `why-you-should-call-your-roofer-before-your-insurance-company` | `-2` version |
| ... and others listed in `next.config.ts` |

**To delete in WordPress:**
1. Go to **Posts** → **All Posts**
2. Search for the duplicate slug
3. Move duplicates to Trash
4. Empty Trash

---

## Post-Migration Checklist

- [ ] WordPress accessible at `cms.bestroofingnow.com`
- [ ] WordPress admin works at `cms.bestroofingnow.com/wp-admin`
- [ ] Main site (`bestroofingnow.com`) shows Vercel/Next.js site
- [ ] Blog posts load correctly at `/blog/[slug]`
- [ ] Images from WordPress display correctly
- [ ] Contact forms work
- [ ] Test a few old WordPress URLs - they should redirect properly

---

## Ongoing Content Management

### Publishing New Blog Posts

1. Log into `https://cms.bestroofingnow.com/wp-admin`
2. Create your post as usual in WordPress
3. Click **Publish**
4. The new post will appear on your live site within 1 hour (ISR cache)

**To see changes immediately:**
- In Vercel dashboard, go to **Deployments**
- Click **Redeploy** on the latest deployment

### Editing Existing Posts

Same as above - edit in WordPress, changes appear within 1 hour.

---

## Troubleshooting

### Blog posts not loading?
1. Check `WORDPRESS_API_URL` is set correctly in Vercel
2. Verify WordPress REST API is accessible: visit `https://cms.bestroofingnow.com/wp-json/wp/v2/posts`
3. Make sure no security plugin is blocking the REST API

### Images not displaying?
1. Check `WORDPRESS_HOSTNAME` is set in Vercel
2. Verify the hostname is in `next.config.ts` remotePatterns
3. Redeploy after changing environment variables

### Redirects not working?
1. Make sure you deployed the latest code with the redirect config
2. Clear your browser cache
3. Test in incognito mode

---

## Technical Reference

### Files Modified

| File | Changes |
|------|---------|
| `next.config.ts` | Added 35+ redirects, image patterns, env var support |
| `src/lib/wordpress.ts` | Added migration comments |
| `.env.example` | Created with example configuration |

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `WORDPRESS_API_URL` | WordPress REST API endpoint | `https://bestroofingnow.com/wp-json/wp/v2` |
| `WORDPRESS_HOSTNAME` | Hostname for WordPress images | `bestroofingnow.com` |

---

## Support

If you run into issues:
1. Check the Vercel deployment logs for errors
2. Test the WordPress API directly in your browser
3. Verify DNS settings have propagated

Your site architecture after migration:

```
┌─────────────────────────────────────────────────────────────┐
│                         VISITORS                             │
│                   bestroofingnow.com                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      VERCEL (Frontend)                       │
│                                                              │
│  • Next.js SSG/ISR pages (blazing fast)                     │
│  • Serves all public pages                                   │
│  • Fetches blog content from WordPress API                   │
│  • Global CDN edge caching                                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ (API calls for content)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   WORDPRESS (Headless CMS)                   │
│               cms.bestroofingnow.com                         │
│                                                              │
│  • Content management only                                   │
│  • REST API for posts, pages, media                          │
│  • Admin at /wp-admin                                        │
│  • Not publicly visible                                      │
└─────────────────────────────────────────────────────────────┘
```
