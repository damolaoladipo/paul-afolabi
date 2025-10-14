// components/AboutMe.tsx

import Image from "next/image"; // Assuming Next.js, if not, use a standard <img> tag
import { ABOUT_ME_DATA } from "@/_data/about-us";


export default function AboutMe() {
  const { imageUrl, imageAlt, professionalSummary, sectionTitle } = ABOUT_ME_DATA;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <div className="container mx-auto">
        
        {/* --- Main Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Column: Image --- */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            {/* Using Next.js Image component for optimization */}
            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
              priority 
            />
             {/* Optional overlay for subtle effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="flex flex-col justify-center text-left">
            {/* Section Title */}
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              {sectionTitle}
            </h2>

            {/* Professional Summary */}
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              {/* Splitting the summary for potential emphasis or visual breaks if needed */}
              {professionalSummary.split('. ').map((sentence, index, array) => (
                <span key={index}>
                  {sentence}
                  {index < array.length - 1 && '. '}
                  {/* Optional: Add a subtle line break or margin for visual separation if sentences are very long */}
                  {/* {index === 0 && <br className="my-2" />} */}
                </span>
              ))}
            </p>

            {/* Optional: Add a call to action or link to LinkedIn */}
            {/* <Button className="mt-4 w-fit">
              <Link href="https://www.linkedin.com/in/paul-afolabi-1a2238169/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
          </div>
        </div>

      </div>
    </section>
  );
}