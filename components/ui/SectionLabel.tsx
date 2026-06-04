import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'label-upper mb-3',
        light ? 'text-onLight/50' : 'text-bodyText/60',
        className
      )}
    >
      {children}
    </div>
  )
}
