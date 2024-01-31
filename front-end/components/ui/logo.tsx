import Link from 'next/link'
import React from 'react'
import Image from "next/image"

/**
 * Logo Component
 */
const Logo = () => {
  return (
    <Link href="/">
        <div className="flex hover:opacity-75 transition items-center">
            <Image 
                src="/sun.svg" 
                alt="Logo"
                width={30}
                height={100}
            />
            <h1 className='px-3 dark:invert text-zinc-900 font-extrabold'>Sun</h1>
        </div>
    </Link>
  )
}

export default Logo