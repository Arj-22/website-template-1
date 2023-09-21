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


<HeroHeaderTwo title='Home Page' description='Fill out this template and connect an API' href='/products'/>
<FeatureCards/>
<Features/>
<Separator/>
{/* <HeroHeader title='Template-1' description='Test Description'/> */}

  </>
  )
}
