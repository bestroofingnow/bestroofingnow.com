'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the modal to reduce initial bundle size
const EstimateModal = dynamic(() => import('./EstimateModal'), {
  ssr: false,
  loading: () => null,
});

export type EstimateType = 'residential' | 'commercial';

interface EstimateContextType {
  openEstimateModal: (type?: EstimateType) => void;
  closeEstimateModal: () => void;
  isOpen: boolean;
  estimateType: EstimateType;
}

const EstimateContext = createContext<EstimateContextType | undefined>(undefined);

export function useEstimate() {
  const context = useContext(EstimateContext);
  if (!context) {
    throw new Error('useEstimate must be used within an EstimateProvider');
  }
  return context;
}

interface EstimateProviderProps {
  children: ReactNode;
}

// Session storage key for exit intent - persists for the entire browser session
const EXIT_INTENT_SHOWN_KEY = 'brn_exit_intent_shown';

export function EstimateProvider({ children }: EstimateProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [estimateType, setEstimateType] = useState<EstimateType>('residential');
  const [hasBeenOpened, setHasBeenOpened] = useState(false); // Track if modal was ever opened
  const [exitIntentEnabled, setExitIntentEnabled] = useState(false);
  const hasShownRef = useRef(false); // Additional in-memory flag to prevent double-firing

  const openEstimateModal = useCallback((type: EstimateType = 'residential') => {
    setEstimateType(type);
    setHasBeenOpened(true); // Trigger lazy load
    setIsOpen(true);
  }, []);
  const closeEstimateModal = useCallback(() => setIsOpen(false), []);

  // Check if exit intent was already shown this session on mount
  useEffect(() => {
    try {
      const alreadyShown = sessionStorage.getItem(EXIT_INTENT_SHOWN_KEY);
      if (alreadyShown === 'true') {
        hasShownRef.current = true;
      }
    } catch {
      // sessionStorage not available (e.g., SSR or private browsing)
    }
  }, []);

  // Handle exit intent - only fires once per session
  const handleExitIntent = useCallback((e: MouseEvent) => {
    // Guard: Don't trigger if already shown, not enabled, or modal is open
    if (hasShownRef.current || !exitIntentEnabled || isOpen) {
      return;
    }

    // Only trigger when mouse leaves from the top of the viewport
    // e.clientY <= 0 means cursor has left the viewport from the top
    // e.relatedTarget === null means cursor left the document entirely
    if (e.clientY <= 0 && e.relatedTarget === null) {
      // Double-check sessionStorage
      try {
        const alreadyShown = sessionStorage.getItem(EXIT_INTENT_SHOWN_KEY);
        if (alreadyShown === 'true') {
          hasShownRef.current = true;
          return;
        }

        // Mark as shown immediately to prevent race conditions
        hasShownRef.current = true;
        sessionStorage.setItem(EXIT_INTENT_SHOWN_KEY, 'true');

        // Small delay to make the popup feel more intentional
        setTimeout(() => {
          setHasBeenOpened(true);
          setIsOpen(true);
        }, 100);
      } catch {
        // sessionStorage not available - still show once using ref
        hasShownRef.current = true;
        setTimeout(() => {
          setHasBeenOpened(true);
          setIsOpen(true);
        }, 100);
      }
    }
  }, [exitIntentEnabled, isOpen]);

  // Enable exit intent after user has been on page for 10 seconds
  // This gives users time to engage with content first
  useEffect(() => {
    const timer = setTimeout(() => {
      setExitIntentEnabled(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Add exit intent listener using mouseleave on document
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      handleExitIntent(e);
    };

    // Use document.documentElement for better cross-browser support
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleExitIntent]);

  return (
    <EstimateContext.Provider value={{ openEstimateModal, closeEstimateModal, isOpen, estimateType }}>
      {children}
      {/* Only render modal after it's been opened at least once to avoid loading the bundle */}
      {hasBeenOpened && <EstimateModal isOpen={isOpen} onClose={closeEstimateModal} estimateType={estimateType} />}
    </EstimateContext.Provider>
  );
}
