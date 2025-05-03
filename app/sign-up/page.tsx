import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function SignUpPage() {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] w-full">
      {/* Background Image */}
      <Image 
        src="/sign-up.webp"
        alt="Sign up background"
        fill
        priority
        className="object-cover z-1"
      />
      
      {/* Clerk SignUp Component */}
      <div className="relative z-2">
        <SignUp/>
      </div>
    </div>
  )
}
