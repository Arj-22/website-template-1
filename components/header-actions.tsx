"use client"; 

import React, { useEffect, useState } from 'react'
import Button from './ui/button';
import { UserCircle } from 'lucide-react';
import { UserPlus2 } from 'lucide-react';
// import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

const HeaderActions = () => {


  // This fixes some hydration errors   
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true)
  }, [])

  
  const router = useRouter(); 
  // const cart = useCart();

  const onClick = () => {
    router.push("/products")
  } 
  if(!isMounted){
    return null
  }

  return (
    // <div className='ml-auto flex items-center gap-x-4'>
      <Button onClick={onClick} className='flex items-center rounded-full bg-black px-6 py-4'>
        <span className='text-sm font-medium text-white'>
            Get Started
        </span>
      </Button>
    // </div>
  )
}

export default HeaderActions
