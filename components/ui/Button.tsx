import { cn } from '@/lib/utils'
import Link from 'next/link'

type Variant = 'primary' | 'outline-dark' | 'outline-light'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

interface LinkButtonProps {
  variant?: Variant
  href: string
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  'primary':       'btn btn-primary btn-label',
  'outline-dark':  'btn btn-outline-dark btn-label',
  'outline-light': 'btn btn-outline-light btn-label',
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({ variant = 'primary', href, className, children }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(variantClasses[variant], className)}>
      {children}
    </Link>
  )
}
