import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'success' | 'warning' | 'error';
}

export const Badge = ({ children, variant = 'neutral' }: BadgeProps) => {
  const styles = {
    neutral: 'bg-zinc-100 text-zinc-600 border-zinc-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <span className={cn(
      "px-3 py-1 text-xs font-bold font-mono border-2 uppercase tracking-wider",
      styles[variant]
    )}>
      {children}
    </span>
  );
};