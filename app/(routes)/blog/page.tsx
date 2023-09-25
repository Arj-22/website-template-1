import Button from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import PostsDisplay from './components/posts-display'

const BlogPage = () => {

  
  return (
    <>
      <div className='flex justify-center p-4'>
        <h1 className="font-semibold text-3xl">Blog</h1>
      </div>
      <PostsDisplay/>
    </>
  )
}

export default BlogPage