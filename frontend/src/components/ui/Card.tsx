import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-white border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] p-6 transition-all hover:translate-y-0.5 hover:shadow-none",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";