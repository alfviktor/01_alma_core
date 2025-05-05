import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import './globals.css'


const title = 'Alma for Teaching'
const description =
  'Alma - Teaching Made Wonderfully Simple'

export const metadata: Metadata = {
  metadataBase: new URL('https://almaskole.no'),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'Alma for Teaching',
    type: 'website',
    url: 'https://almaskole.no',
    images: [
      {
        url: '/opengraph.webp',
        width: 3840,
        height: 2160,
        alt: 'Alma Skole'
      }
    ]
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: 'alfviktor.com'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={GeistSans.className} suppressHydrationWarning>
        <body
          className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 dark:bg-background-dark dark:text-foreground-dark"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              {/* Following the pattern from dashboard example */}
              <AppSidebar />
              <SidebarInset className="flex flex-col min-h-screen">
                {/* Header with sidebar trigger */}
                <Header />
                
                {/* Main content with wider layout */}
                <div className="flex flex-col flex-1 w-full">
                  <main className="flex-1 overflow-auto h-full w-full">
                    <div className="mx-auto px-4 w-full h-full py-4" style={{ maxWidth: '1600px' }}>
                      {children}
                    </div>
                  </main>
                </div>
              </SidebarInset>
              <Toaster />
            </SidebarProvider>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
