import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
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
  return (
    <section
      className={`slice--hero py-20 md:py-28 lg:py-36 px-4 md:px-8
        ${slice.primary.background === "Gray" ? "bg-gray-100" : slice.primary.background === "Dark" ? "bg-neutral-900 text-white" : "bg-transparent"}`}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <div className={`max-w-[1300px] mx-auto ${slice.primary.align_content === "Center" ? "flex items-center flex-col" : "flex flex-col items-start"}`}>
          <PrismicRichText field={slice.primary.text} />
          <div className="flex gap-x-2 mt-6 items-center">
            {slice.primary.call_to_actions.map((item) => (
              <PrismicNextLink field={item.link} key={item.button_display}>
                <Button size="lg" variant={item.variant}>{item.button_display} {item.icon !== "None" && icons[item.icon]}</Button>
              </PrismicNextLink>
            ))}
          </div>

        </div>
      )}
    </section>
  )
};

export default Hero;
