import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function SignInPage() {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] w-full">
      {/* Background Image */}
      <Image 
        src="/log-in.webp"
        alt="Login background"
        fill
        priority
        className="object-cover z-1"
      />
      
      {/* Clerk SignIn Component */}
      <div className="relative z-2">
        <SignIn/>
      </div>
    </div>
  )
}
