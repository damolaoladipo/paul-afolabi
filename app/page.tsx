import AboutMe from "@/components/sections/about-us";
import AccessBank from "@/components/sections/access";
import CountryCloud from "@/components/sections/country-cloud";
import CallToAction from "@/components/sections/cta";
import FirstBank from "@/components/sections/first-bank";
import HeroSection from "@/components/sections/hero-section";
import ProjectOne  from "@/components/sections/project-one";
import ProjectTwo from "@/components/sections/project-two";
import SkillsSection from "@/components/sections/skills";



const Home =() =>{
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">

      <HeroSection/>
      <CountryCloud/>
      <AboutMe/>
      <SkillsSection/>
      <AccessBank/>
      <ProjectOne/>
      <FirstBank/>
      <ProjectTwo/>
      <CallToAction />
      
    </main>
  );
}

export default Home;
