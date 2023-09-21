import Image from "next/image"
// import HeadingText from "@/components/heading-text"
// import { featureCards } from "@/config/contents"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import icon from "../assets/icons8-allocate-48.png"
import HeadingText from "./heading-text"

export const FeatureCards = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="container space-y-8 py-12 text-center lg:py-20">

        {/* {featureCards.header || featureCards.subheader ? (
          <HeadingText subtext={featureCards.subheader}>
            {featureCards.header}
          </HeadingText>
        ) : null} */}
        <HeadingText children="Our Clients"/>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* {featureCards.content.map((cards) => (
            
          ))} */}
            <Card
            //   key={cards.text}
            key={"testKey"}
              className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary"
            >
                <div className="flex items-center justify-center">
                  <div className="flex flex-1 bg-white">
                    <Image
                      src={icon}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
              {/* {cards.image !== "" ? (
                <div className="flex items-center justify-center">
                  <div className="flex flex-1 bg-white">
                    <Image
                      src={cards.image}
                      width={100}
                      height={100}
                      alt="Card image"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )} */}
              <div className="space-y-2">
                {/* <CardTitle>{cards.text}</CardTitle>
                <CardDescription>{cards.subtext}</CardDescription> */}
                <CardTitle>{"Client 1"}</CardTitle>
                <CardDescription>{"Test Subtext"}</CardDescription>
              </div>
            </Card>

            <Card
            //   key={cards.text}
            key={"testKey"}
              className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary"
            >
                <div className="flex items-center justify-center">
                  <div className="flex flex-1 bg-white">
                    <Image
                      src={icon}
                      width={100}
                      height={100}
                      alt="Card image"
                    />
                  </div>
                </div>
              {/* {cards.image !== "" ? (
                <div className="flex items-center justify-center">
                  <div className="flex flex-1 bg-white">
                    <Image
                      src={cards.image}
                      width={100}
                      height={100}
                      alt="Card image"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )} */}
              <div className="space-y-2">
                {/* <CardTitle>{cards.text}</CardTitle>
                <CardDescription>{cards.subtext}</CardDescription> */}
                <CardTitle>{"Client 2"}</CardTitle>
                <CardDescription>{"Test Subtext"}</CardDescription>
              </div>
            </Card>
            <Card
            //   key={cards.text}
            key={"testKey"}
              className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary"
            >
                <div className="flex items-center justify-center">
                  <div className="flex flex-1 bg-white">
                    <Image
                      src={icon}
                      width={100}
                      height={100}
                      alt="Card image"
                    />
                  </div>
                </div>
              {/* {cards.image !== "" ? (
                <div className="flex items-center justify-center">
                  <div className="flex flex-1 bg-white">
                    <Image
                      src={cards.image}
                      width={100}
                      height={100}
                      alt="Card image"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )} */}
              <div className="space-y-2">
                {/* <CardTitle>{cards.text}</CardTitle>
                <CardDescription>{cards.subtext}</CardDescription> */}
                <CardTitle>{"Client 3"}</CardTitle>
                <CardDescription>{"Test Subtext"}</CardDescription>
              </div>
            </Card>
        </div>
      </div>
    </section>
  )
}