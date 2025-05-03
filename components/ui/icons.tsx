'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('font-bold', className)}
      {...props}
    >
      Alma
    </span>
  )
}

export { IconLogo }
