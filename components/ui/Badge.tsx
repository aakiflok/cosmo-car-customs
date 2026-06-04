import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'dark' | 'gold'
}

export function Badge({ children, className, variant = 'dark' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-badge',
        variant === 'dark' && 'bg-elevated text-bodyText',
        variant === 'gold' && 'bg-gold/15 text-gold',
        className
      )}
    >
      {children}
    </span>
  )
}
