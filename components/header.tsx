"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { IconLogo } from './ui/icons'
import { SidebarTrigger } from './ui/sidebar'

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 p-2 flex justify-between items-center z-10 backdrop-blur bg-background/80">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="mr-1" />
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Morphic</span>
        </a>
      </div>
      <div className="flex gap-0.5">
      </div>
    </header>
  )
}

export default Header
