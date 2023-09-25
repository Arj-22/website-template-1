"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'

interface CardActionProps {
    id: string
}

const CardActions: React.FC<CardActionProps> = ({id}) => {

    const router = useRouter()
  return (
    <Button onClick={() => router.push(`/blog/${id}`)}className='m-4'>View Post</Button>
  )
}

export default CardActions