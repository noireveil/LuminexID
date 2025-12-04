import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-xs font-bold text-zinc-900 uppercase tracking-widest">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-stone-50 border-2 border-zinc-200 p-3 text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors placeholder:text-zinc-300 font-mono text-sm',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';