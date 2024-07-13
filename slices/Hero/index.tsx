import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

const icons: { [key: string]: React.JSX.Element } = {
  "Chevron Right": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>,
  "Arrow Right": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>,
  "Arrow Long Right": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>,
  "Arrow Up Right": <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  if (slice.variation === "default") {
    return (
      <section
        className={`slice--hero pt-20 md:pt-28 lg:pt-36 px-6 md:px-8
        ${slice.primary.image ? " pb-6 md:pb-8 lg:pb-12" : "pb-20 md:pb-28 lg:pb-36"}
        ${slice.primary.background === "Gray" ? "bg-gray-100" : slice.primary.background === "Dark" ? "bg-neutral-900 text-white" : "bg-transparent"}`}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div
          data-center={slice.primary.align_content === "Center"}
          className={`max-w-[1300px] mx-auto ${slice.primary.align_content === "Center" ? "flex items-center flex-col" : "flex flex-col items-start"}`}
        >
          <PrismicRichText field={slice.primary.text} />
          <div className={`flex flex-row gap-2 mt-6 items-center ${slice.primary.align_content === "Center" ? "flex-col md:flex-row" : ""}`}>
            {slice.primary.call_to_actions.map((item) => (
              <PrismicNextLink field={item.link} key={item.button_display}>
                <Button size="lg" variant={item.variant}>{item.button_display} {item.icon !== "None" && icons[item.icon]}</Button>
              </PrismicNextLink>
            ))}
          </div>
          {slice.primary.image && (
            <PrismicNextImage className={`block mt-8 lg:mt-12 w-full ${slice.primary.align_content === "Center" && "mx-auto"}`} field={slice.primary.image} />
          )}
        </div>
      </section>
    )
  }

  if (["contentLeftImageRight", "contentRightImageLeft"].includes(slice.variation)) {
    return (
      <section
        className={`slice--hero
          ${!slice.primary.image_full_height ? "px-6 md:px-8" : "md:pb-6 lg:pb-0"}
          ${slice.primary.background === "Gray" ? "bg-gray-100" : slice.primary.background === "Dark" ? "bg-neutral-900 text-white" : ""}`}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className={`mx-auto flex flex-col lg:flex-row ${slice.variation === "contentRightImageLeft" && "lg:flex-row-reverse"} items-center gap-x-6 ${!slice.primary.image_full_height && "max-w-[1300px] py-8 lg:gap-x-12"}`}>
          <div className={`py-20 lg:py-28 w-full ${slice.primary.image_full_height ? "lg:w-2/3" : "lg:w-1/2"}`}>
            <div className={slice.primary.image_full_height ? "lg:max-w-xl 2xl:max-w-2xl mx-auto px-6 md:px-8" : ""}>
              <PrismicRichText field={slice.primary.text} />
              <div className={`flex flex-row gap-2 mt-6 items-center`}>
                {slice.primary.call_to_actions.map((item) => (
                  <PrismicNextLink field={item.link} key={item.button_display}>
                    <Button size="lg" variant={item.variant}>{item.button_display} {item.icon !== "None" && icons[item.icon]}</Button>
                  </PrismicNextLink>
                ))}
              </div>
            </div>

          </div>
          <div className={`${slice.primary.image_full_height ? "lg:w-1/3" : "lg:w-1/2"}`}>
            <PrismicNextImage className="mx-auto max-w-md w-full lg:max-w-none" field={slice.primary.image} />
          </div>
        </div>

      </section>
    )
  }

  return (
    <span>The variant doesn't exist</span>
  )
};

export default Hero;
