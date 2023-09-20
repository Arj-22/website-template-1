import { FeatureCards } from '@/components/featureCards'
import Features from '@/components/features'
import HeroHeader from '@/components/hero-header'
import { HeroHeaderTwo } from '@/components/hero-header-2'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    {/* <HeroHeader title="Template1" description='Fill out this template anc connect an API'/> */}
    {/* <div className="relative isolate px-6 pt-14 lg:px-8">




    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2" ></div>
    </div>
  </div> */}


<HeroHeaderTwo title='Home Page' description='Fill out this template anc connect an API'/>
<FeatureCards/>
<Features/>
<Separator/>
<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
      <div className="text-center">
        {/* title section */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Template-1</h1>
        {/* description */}
        <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        {/* buttons */}

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>

      </div>
  </div>
  </>
  )
}
