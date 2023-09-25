import getPosts from '@/actions/get-posts'
import Button from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import CardActions from './card-actions'

const PostsDisplay = async ()  => {

    const posts = await getPosts();

  return (
    <>
    <div className="grid grid-cols-2 gap-4">
        {posts.map(post => (
            <Card className='p-4 m-4'>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
                <CardActions id={post.id}/>
              </Card>  
        ))}
    </div>
    </>
  )
}

export default PostsDisplay