import React from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  fullWidth?: boolean;
}

/**
 * PageContainer component provides standardized layout containers to ensure
 * proper alignment and prevent horizontal scrollbars across all pages.
 */
export function PageContainer({
  children,
  className,
  innerClassName,
  fullWidth = false,
}: PageContainerProps) {
  return (
    <div className={cn('w-full overflow-x-hidden', className)}>
      <div 
        className={cn(
          'w-full mx-auto px-4 sm:px-6 md:px-8',
          fullWidth ? 'max-w-full' : 'max-w-full md:max-w-7xl',
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * PageSection component provides standardized section containers
 * with appropriate spacing and alignment.
 */
export function PageSection({
  children,
  className,
  innerClassName,
  fullWidth = false,
}: PageContainerProps) {
  return (
    <section className={cn('w-full py-12 sm:py-16 md:py-20 overflow-visible', className)}>
      <div 
        className={cn(
          'w-full mx-auto px-4 sm:px-6 md:px-8',
          fullWidth ? 'max-w-full' : 'max-w-full md:max-w-7xl',
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

/**
 * ContentGrid component provides a standardized responsive grid layout
 */
export function ContentGrid({
  children,
  className,
  columns = 4,
}: {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}) {
  const getColumnsClass = () => {
    switch(columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'sm:grid-cols-2';
      case 3: return 'sm:grid-cols-2 md:grid-cols-3';
      case 4: return 'sm:grid-cols-2 lg:grid-cols-4';
      default: return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };
  
  return (
    <div className={cn('grid gap-6 sm:gap-8', getColumnsClass(), className)}>
      {children}
    </div>
  );
} 