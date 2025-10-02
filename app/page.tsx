import AboutUs from "@/components/sections/about-us";
import CountryCloud from "@/components/sections/country-cloud";
import CallToAction from "@/components/sections/cta";
import HeroSection from "@/components/sections/hero-section";
import ProjectOne  from "@/components/sections/project-one";
import ProjectTwo from "@/components/sections/project-two";



const Home =() =>{
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">

      <HeroSection/>
      <AboutUs/>
      <CountryCloud/>
      <ProjectOne/>
      <ProjectTwo/>
       <CallToAction />
      
    </main>
  );
}

export default Home;
