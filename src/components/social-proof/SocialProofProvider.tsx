'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { SocialProofNotification } from '../ui/SocialProofNotification';

// Common first names for realistic notifications
const FIRST_NAMES = [
  'Sarah', 'Mike', 'Jennifer', 'David', 'Emily', 'Chris', 'Amanda', 'Jason',
  'Lisa', 'Brian', 'Rachel', 'Kevin', 'Michelle', 'Matt', 'Lauren', 'Andrew',
  'Jessica', 'Ryan', 'Ashley', 'Mark', 'Nicole', 'Steve', 'Megan', 'Dan',
];

// Charlotte area neighborhoods - simplified list for social proof
const NEIGHBORHOODS = [
  'Ballantyne', 'Myers Park', 'South End', 'NoDa', 'Dilworth', 'Plaza Midwood',
  'Eastover', 'SouthPark', 'Elizabeth', 'University City', 'Steele Creek',
  'Highland Creek', 'Providence Plantation', 'Blakeney', 'Rea Farms',
  'Arboretum', 'Matthews', 'Mint Hill', 'Huntersville', 'Cornelius',
  'Davidson', 'Mooresville', 'Lake Norman', 'Pineville', 'Waxhaw',
  'Fort Mill', 'Indian Trail', 'Weddington', 'Marvin', 'Harrisburg',
];

// Actions that indicate engagement
const ACTIONS = [
  'just requested a free estimate',
  'requested a roof inspection',
  'scheduled a consultation',
  'requested a quote',
  'booked a free assessment',
];

// Time ago options
const TIME_AGO = [
  '1 min ago',
  '2 min ago',
  '3 min ago',
  '5 min ago',
];

interface Notification {
  name: string;
  neighborhood: string;
  action: string;
  timeAgo: string;
}

interface SocialProofContextType {
  pause: () => void;
  resume: () => void;
}

const SocialProofContext = createContext<SocialProofContextType | undefined>(undefined);

export function useSocialProof() {
  const context = useContext(SocialProofContext);
  return context;
}

interface SocialProofProviderProps {
  children: ReactNode;
}

// Session storage key to track notifications shown
const SOCIAL_PROOF_COUNT_KEY = 'brn_social_proof_count';

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateNotification(): Notification {
  return {
    name: getRandomItem(FIRST_NAMES),
    neighborhood: getRandomItem(NEIGHBORHOODS),
    action: getRandomItem(ACTIONS),
    timeAgo: getRandomItem(TIME_AGO),
  };
}

export function SocialProofProvider({ children }: SocialProofProviderProps) {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const notificationCountRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxNotifications = 6;

  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const showNotification = useCallback(() => {
    if (notificationCountRef.current >= maxNotifications || isPaused) {
      return;
    }

    const notification = generateNotification();
    setCurrentNotification(notification);
    setIsVisible(true);
    notificationCountRef.current += 1;

    // Update session storage
    try {
      sessionStorage.setItem(SOCIAL_PROOF_COUNT_KEY, String(notificationCountRef.current));
    } catch {
      // Session storage not available
    }

    // Hide after 5 seconds
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);

      // Schedule next notification if under limit
      if (notificationCountRef.current < maxNotifications && !isPaused) {
        // Random delay between 30-60 seconds for next notification
        const nextDelay = 30000 + Math.random() * 30000;
        timeoutRef.current = setTimeout(showNotification, nextDelay);
      }
    }, 5000);
  }, [isPaused, maxNotifications]);

  const dismissNotification = useCallback(() => {
    setIsVisible(false);
    clearTimeouts();

    // Schedule next notification
    if (notificationCountRef.current < maxNotifications && !isPaused) {
      const nextDelay = 30000 + Math.random() * 30000;
      timeoutRef.current = setTimeout(showNotification, nextDelay);
    }
  }, [clearTimeouts, isPaused, maxNotifications, showNotification]);

  const pause = useCallback(() => {
    setIsPaused(true);
    clearTimeouts();
  }, [clearTimeouts]);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Initialize and check session storage
  useEffect(() => {
    try {
      const storedCount = sessionStorage.getItem(SOCIAL_PROOF_COUNT_KEY);
      if (storedCount) {
        notificationCountRef.current = parseInt(storedCount, 10);
      }
    } catch {
      // Session storage not available
    }

    // Only start if we haven't exceeded the limit
    if (notificationCountRef.current >= maxNotifications) {
      return;
    }

    // Initial delay of 8-15 seconds before first notification
    const initialDelay = 8000 + Math.random() * 7000;
    timeoutRef.current = setTimeout(showNotification, initialDelay);

    return () => {
      clearTimeouts();
    };
  }, [showNotification, clearTimeouts, maxNotifications]);

  return (
    <SocialProofContext.Provider value={{ pause, resume }}>
      {children}
      {currentNotification && (
        <SocialProofNotification
          name={currentNotification.name}
          neighborhood={currentNotification.neighborhood}
          action={currentNotification.action}
          timeAgo={currentNotification.timeAgo}
          isVisible={isVisible}
          onDismiss={dismissNotification}
        />
      )}
    </SocialProofContext.Provider>
  );
}
