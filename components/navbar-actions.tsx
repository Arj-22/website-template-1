"use client"; 

import React, { useEffect, useState } from 'react'
import Button from './ui/button';
import { UserCircle } from 'lucide-react';
import { UserPlus2 } from 'lucide-react';
// import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

const NavbarActions = () => {


  // This fixes some hydration errors   
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true)
  }, [])

  
  const router = useRouter(); 
  // const cart = useCart();

  if(!isMounted){
    return null
  }

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button onClick={() => {}} className='flex items-center rounded-full bg-black px-4 py-2'>
        <UserCircle size={20} color='white'/>
        <span className='ml-2 text-sm font-medium text-white'>
            Log In
        </span>
      </Button>
      <Button onClick={() => {}} className='flex items-center rounded-full bg-white px-4 py-2 border-black border-2'>
        <UserPlus2 size={20} color='black'/>
        <span className='ml-2 text-sm font-medium text-black'>
            Sign Up
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions
