import getPost from '@/actions/get-post'
import { useParams } from 'next/navigation';
import React from 'react'

const PostPage = async () => {

  // const post = await getPost(id); 
  return (
    <div>
      <h1>Post Title</h1>
    </div>
  )
}

export default PostPage