import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { Briefcase, HomeIcon, SearchIcon, UserIcon,  MessagesSquare } from 'lucide-react'
//import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
  return( 
    <div className='flex items-center p-2 max-w-6xl mx-auto'>
        <Image

            className="rounded-lg"
            src="https://www.neoito.com/blog/wp-content/uploads/2022/09/best-networking-apps.png.webp"
            width={40}
            height={40}
            alt="logo"
        
        />

        <div className='flex-1'>
            <form className='flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96'>
                <SearchIcon className="h-4 text-gray-600"> </SearchIcon>
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent flex-1 outline-none"
                />

            </form>
        
        </div>

        <div className="flex items-center space-x-4 px-6">

        <Link href='/' className='flex items-center space-x-4 px-6'>
            <HomeIcon className='icon' />
            <p>Home</p>
        </Link>

        <Link href='' className='icon hidden md:flex'>
            <UserIcon className='h-5' />
            <p>Network</p>
        </Link>

        <Link href='' className='icon hidden md:flex'>
            <Briefcase className='h-5' />
            <p>Jobs</p>
        </Link>

        <Link href="" className="icon">
          <MessagesSquare className="h-5" />
          <p>Messaging</p>
        </Link>

        {/*<SignedIn>
          <UserButton />
  </SignedIn>*/}

        {/*
        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
         */}
        </div>
    </div>

    
  )
}

export default Header