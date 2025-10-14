import React from "react";

import { ArrowUpRight, DotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { heroData } from "@/_data/hero";

import type { Transition } from "framer-motion";

const springTransition: Transition = {
  type: "spring",
  bounce: 0.3,
  duration: 1.5,
};

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: springTransition,
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>

            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mt-0 lg:mr-auto text-left">

                <div className="flex items-center text-sm text-neutral-700 dark:text-neutral-400">
                  <DotIcon className="h-10 w-10 -ml-3" />{heroData.badge}
                  
                </div>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className=" max-w-2xl text-5xl font-medium text-left md:text-4xl"
                >
                  {heroData.heading}
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mt-8 max-w-2xl text-lg text-pretty"
                >
                  {heroData.subheading}
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 flex items-center gap-2"
                >
                  <div
                    key={heroData.button1.id}
                    className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                    >
                      <a href={heroData.button1.href}>
                        <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                          {heroData.button1.text}

                          <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </span>

                        <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"></div>
                      </a>
                    </Button>
                  </div>

                  <div className="group flex flex-1 rounded-[calc(var(--radius-sm)+0.125rem)]">
                    <Button
                      key={heroData.button2.id}
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-background relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                    >
                      <a href={heroData.button2.href}>
                        <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                          {heroData.button2.text}

                          <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </span>

                        <div className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"></div>
                      </a>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20  mb-10 md:-mr-6">
                <div className="bg-background relative mx-auto max-w-5xl overflow-hidden rounded-md border p-4 ">
                  {/* The video will replace the Image components. */}
                  <iframe
                    className="relative z-2 w-full rounded-2xl aspect-video"
                    width="100%"
                    height="auto" // 'auto' allows the aspect-video class to control height
                    src="https://www.youtube.com/embed/59Eji3fQj3E?autoplay=0&amp;fs=1&amp;rel=0"
                    title="How I Help Big Corporations Generate Over $500K in Revenue Every Year"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}