import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', isLoading, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-zinc-900 text-stone-50 hover:bg-zinc-800 border-2 border-transparent',
      outline: 'bg-transparent border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-100',
      ghost: 'bg-transparent text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100',
      danger: 'bg-red-700 text-white hover:bg-red-800',
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          'px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all active:translate-y-0.5 flex items-center justify-center gap-2',
          variants[variant],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';