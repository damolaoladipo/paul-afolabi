
import { AccessBankData } from "@/_data/bank-data";
import { TextEffect } from "@/components/ui/text-effect";


export default function AccessBank() {
  return (
    <section className="bg-neutral-100 py-16  pt-10 md:py-22 dark:bg-[#171717]">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
        {/* This is the main flex container for the heading and subheading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-x-12">
          {/* Heading Section */}
          <div className="flex-1 items-start">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-6 max-w-2xl text-3xl md:text-3xl font-medium text-left"
            >
              {AccessBankData.heading}
            </TextEffect>
          </div>

          {/* Subheading and Button Section */}
          <div className="flex-1 flex flex-col space-y-6">
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mt-6 max-w-2xl text-lg text-left"
            >
              {AccessBankData.subheading}
            </TextEffect>

            {/* <div className="flex flex-1">
              <div className="group rounded-[calc(var(--radius-sm)+0.125rem)]">
                <Button
                  asChild
                  size="lg"
                  variant={AccessBankData.button.variant}
                  className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                >
                  <a href={AccessBankData.button.href}>
                    <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                      {AccessBankData.button.text}
                      <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                    <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"></div>
                  </a>
                </Button>
              </div>
            </div> */}
          </div>
        </div>
{/* 
        <img
          className="rounded-(--radius) grayscale"
          src={AccessBankData.image.src}
          alt={AccessBankData.image.alt}
          height={AccessBankData.image.height}
          width={AccessBankData.image.width}
          loading="lazy"
        /> */}
      </div>
    </section>
  );
}
