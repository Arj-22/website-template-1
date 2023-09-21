import Link from "next/link"
import Image from "next/image"
// import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import Button from "./ui/button"
import HeaderActions from "./header-actions"
// import { heroHeader } from "@/config/contents"


interface HeroHeaderProps{
  title: string,
  description: string,
  href: string
}


export const HeroHeaderTwo: React.FC<HeroHeaderProps> = ({title, description, href}) => {

  return (
    <section className="container flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl">
            {title}
          </h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
            {description}
          </h2>
        </div>
        {/* <Link
          href={href}
          target="_blank"
          className="rounded-full bg-black text-white p-4"
        >
          Get started
        </Link> */}
        <HeaderActions/>

      </div>
      {/* {heroHeader.image !== "" ? (
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src={heroHeader.image}
            width={500}
            height={500}
            alt="Header image"
          />
        </div>
      ) : (
        <></>
      )} */}

    </section>
  )
}