"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { IconLogo } from './ui/icons'
import { SidebarTrigger } from './ui/sidebar'
import { Button } from '@/components/ui/button'
import { UserButton, useAuth } from '@clerk/nextjs'

export const Header: React.FC = () => {
  const { isSignedIn, isLoaded } = useAuth();
  return (
    <header className="sticky top-0 p-2 flex justify-between items-center z-10 backdrop-blur bg-background/80">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="mr-1" />
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Morphic</span>
        </a>
      </div>
      <div className="flex gap-2 items-center">
        {isLoaded && isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => window.location.href = 'https://accounts.almaskole.no/sign-in'}
              className="font-medium transition-all hover:bg-primary/10"
            >
              Login
            </Button>
            <Button 
              size="sm" 
              onClick={() => window.location.href = 'https://accounts.almaskole.no/sign-up'}
              className="font-medium"
            >
              Register
            </Button>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
