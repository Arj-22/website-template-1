import Image from "next/image"
import HeadingText from "@/components/heading-text"
// import { features } from "@/config/contents"
import icon from "../assets/icons8-allocate-48.png"

export default function Features() {
  return (
    <section className="container space-y-8 py-12 lg:py-20" id="features">
      {/* {features.header || features.subheader ? (
        <HeadingText subtext={features.subheader} className="text-center">
          {features.header}
        </HeadingText>
      ) : null} */}

        <HeadingText subtext={"features.subheader"} className="text-center">
          {"Our Services"}
        </HeadingText>


      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-8">
          {/* {features.content.map((cards) => (

          ))} */}


            <div
            //   key={cards.text}
            key={"testKey"}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-8 md:text-left"
            >
              {/* {cards.image !== "" ? (
                <div className="flex">
                  <Image
                    src={cards.image}
                    className="dark:brightness-0 dark:invert-[1]"
                    width={100}
                    height={100}
                    alt="Card image"
                  />
                </div>
              ) : (
                <></>
              )} */}

                <div className="flex">
                  <Image
                    src={icon}
                    className="dark:brightness-0 dark:invert-[1]"
                    width={100}
                    height={100}
                    alt="Card image"
                  />
                </div>
              <div className="flex-1">
                <p className="md:text4xl text-2xl font-semibold">
                  {"Card1"}
                </p>
                <p className="font-light text-muted-foreground md:text-lg">
                  {"Card subtext"}
                </p>
              </div>
            </div>
        </div>
        <div
          className="md:border"
          style={{
            backgroundImage: `url(${"features.image"})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}>
            <p className="flex p-4 justify-center">Description</p>
          </div>

      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-8">
          {/* {features.content.map((cards) => (

          ))} */}


            <div
            //   key={cards.text}
            key={"testKey"}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-8 md:text-left"
            >
              {/* {cards.image !== "" ? (
                <div className="flex">
                  <Image
                    src={cards.image}
                    className="dark:brightness-0 dark:invert-[1]"
                    width={100}
                    height={100}
                    alt="Card image"
                  />
                </div>
              ) : (
                <></>
              )} */}

                <div className="flex">
                  <Image
                    src={icon}
                    className="dark:brightness-0 dark:invert-[1]"
                    width={100}
                    height={100}
                    alt="Card image"
                  />
                </div>
              <div className="flex-1">
                <p className="md:text4xl text-2xl font-semibold">
                  {"Card1"}
                </p>
                <p className="font-light text-muted-foreground md:text-lg">
                  {"Card subtext"}
                </p>
              </div>
            </div>
        </div>
        <div
          className="md:border"
          style={{
            backgroundImage: `url(${"features.image"})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}>
            <p className="flex p-4 justify-center">Description</p>
          </div>

      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-1 gap-8">
          {/* {features.content.map((cards) => (

          ))} */}


            <div
            //   key={cards.text}
            key={"testKey"}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-8 md:text-left"
            >
              {/* {cards.image !== "" ? (
                <div className="flex">
                  <Image
                    src={cards.image}
                    className="dark:brightness-0 dark:invert-[1]"
                    width={100}
                    height={100}
                    alt="Card image"
                  />
                </div>
              ) : (
                <></>
              )} */}

                <div className="flex">
                  <Image
                    src={icon}
                    className="dark:brightness-0 dark:invert-[1]"
                    width={100}
                    height={100}
                    alt="Card image"
                  />
                </div>
              <div className="flex-1">
                <p className="md:text4xl text-2xl font-semibold">
                  {"Card1"}
                </p>
                <p className="font-light text-muted-foreground md:text-lg">
                  {"Card subtext"}
                </p>
              </div>
            </div>
        </div>
        <div
          className="md:border"
          style={{
            backgroundImage: `url(${"features.image"})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}>
            <p className="flex p-4 justify-center">Description</p>
          </div>

      </div>
    </section>
  )
}