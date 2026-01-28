'use client';

import { CheckCircle, X } from 'lucide-react';

interface SocialProofNotificationProps {
  name: string;
  neighborhood: string;
  action: string;
  timeAgo: string;
  isVisible: boolean;
  onDismiss: () => void;
}

export function SocialProofNotification({
  name,
  neighborhood,
  action,
  timeAgo,
  isVisible,
  onDismiss,
}: SocialProofNotificationProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-sm w-full sm:w-auto
        bg-white rounded-lg shadow-lg border border-gray-200
        transform transition-all duration-500 ease-out
        ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
      `}
      role="status"
      aria-live="polite"
    >
      <div className="p-4 pr-10">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              {name} in <span className="text-primary font-semibold">{neighborhood}</span>
            </p>
            <p className="text-sm text-gray-600 mt-0.5">
              {action}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {timeAgo}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={onDismiss}
        className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
