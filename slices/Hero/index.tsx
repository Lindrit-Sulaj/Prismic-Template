import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Button } from "@/components/ui/button";

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
      className={`text-black py-20 md:py-28 lg:py-36 slice--hero px-4 md:px-8 ${slice.variation}`}
      style={{
        background: slice.variation === "withBackground" ? `${slice.primary.darkenimage && `linear-gradient(45deg,${slice.primary.darkeningcolor}80,${slice.primary.darkeningcolor}80),`} url("${slice.primary.backgroundimage.url}")` : "white" 
      }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`max-w-[1300px] mx-auto ${slice.primary.textalign === "center" ? "flex flex-col items-center" : "flex flex-col items-start"}`}>
        <PrismicRichText field={slice.primary.text} />
        <div className="flex justify-center items-center mt-6 gap-x-4">
          {slice.primary.buttons.map((item) => (
            <PrismicNextLink key={item.display} field={item.link}>
              <Button size="lg" variant={item.variant === "primary" ? "default" : item.variant}>
                {item.display}
              </Button>
            </PrismicNextLink>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Hero;
