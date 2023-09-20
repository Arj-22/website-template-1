import React from 'react'
import { MainNav } from './main-nav'
import Container from './ui/container'
import Link from 'next/link'
import NavbarActions from './navbar-actions'

interface NavbarProps{
    siteTitle: string | undefined
}

const Navbar: React.FC<NavbarProps> = ({siteTitle}) => {
  return (
        // <nav className="bg-white border-gray-200 dark:bg-gray-900">
            
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <a href="/" className="flex items-center">
        //             {/* Image or Logo */}
        //             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />

        //             {/* Title */}
        //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Template-1</span>
        //         </a>

        //         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        //             <MainNav/>

        //         </div>
        //     </div>
        // </nav>

        <div className='border-b'>
        <Container>
            <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
                <Link href="/" className='ml-4 flex lg:ml-0 gao-x-2'>
                    <p className='font-bold text-xl'>{siteTitle}</p>
                </Link>
                <MainNav />
                <NavbarActions/>
            </div> 
        </Container>
    </div>
  )
}

export default Navbar