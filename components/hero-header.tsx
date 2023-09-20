import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeroHeaderProps{
    title: string,
    description: string
}

const HeroHeader: React.FC<HeroHeaderProps>= ({title, description}) => {
  return (
<main
  className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
  <div className="py-6 md:order-1 hidden md:block">
    <Image
      src={"/favicon.ico"}
      alt="Astronaut in the air"
    //   widths={[200, 400, 600]}
    width={200}
    height={200}
    //   aspectRatio="4:3"
      sizes="(max-width: 800px) 100vw, 620px"
      loading="eager"
    //   format="avif"
    />
  </div>
  <div>
    <h1
      className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
      {title}
    </h1>
    <p className="text-lg mt-4 text-slate-600 max-w-xl">
        {description}
    </p>
    <div className="mt-6 flex flex-col sm:flex-row gap-3">
    </div>
  </div>
</main>
  )
}

export default HeroHeader