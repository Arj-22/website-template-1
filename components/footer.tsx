import React from 'react'

interface FooterProps{
  siteName: string | undefined
}


const Footer: React.FC<FooterProps> = ({siteName}) => {
  return (
    <footer className='bg-white border-t'>
        <div className='mx-auto py-10'>
            <p className='text-center text-xs text-black'>
                &copy; 2023 {siteName}, Inc. All rights reserved. Powered By Braezy.
            </p>

        </div>
    </footer>
  )
}

export default Footer
