'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
}

export default function LoadingSpinner({ size = 'md', color = 'primary' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-cyan-400 border-t-transparent',
    secondary: 'border-purple-400 border-t-transparent',
    white: 'border-white border-t-transparent'
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`${sizeClasses[size]} border-2 ${colorClasses[color]} rounded-full animate-spin`}
      ></div>
    </div>
  );
}

// Skeleton loading component for content
export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg h-4 mb-2"></div>
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg h-4 w-3/4 mb-2"></div>
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg h-4 w-1/2"></div>
    </div>
  );
}

// Card skeleton for portfolio items
export function CardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 rounded-2xl p-8 border border-slate-700/50 animate-pulse">
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg h-48 mb-6"></div>
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg h-6 mb-4"></div>
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg h-4 mb-2"></div>
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg h-4 w-3/4"></div>
    </div>
  );
}
