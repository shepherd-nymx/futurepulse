import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  fallbackTitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  fallbackTitle = 'Future Pulse Asset',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-slate-900/80 border border-slate-800/80 rounded-xl flex flex-col items-center justify-center p-6 text-center tech-grid-subtle ${className}`}
      >
        <div className="w-12 h-12 rounded-lg bg-blue-950/60 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
          <Cpu className="w-6 h-6" />
        </div>
        <p className="text-sm font-medium text-slate-300">{fallbackTitle}</p>
        <p className="text-xs text-slate-500 mt-1">Future Pulse Technical Archive</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-900/60 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-blue-500/30 border-t-blue-400 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
