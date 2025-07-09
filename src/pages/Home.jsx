
import { AboutSection } from "../components/AboutSection.jsx"
import {  ForeverWithHerSection } from "../components/Forever.jsx"
import { FeelingsSection } from "../components/FeelingSection.jsx"
import { HeroSection } from "../components/HeroSection.jsx"
import {  InteractiveParticleBackground } from "../components/InteractiveParticleBackground.jsx"
import { Navbar } from "../components/Navbar.jsx"
import { MomentsSection } from "../components/ProjectSection.jsx"
import LettersToSanaPage from "../components/letter.jsx"




export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*  Theme Toggle */}
  


         {/*  Background Effect */}
         <InteractiveParticleBackground/>
        





          {/*  NavBar */}
          <Navbar/>




           {/*  Main Content */}
           <main>
          


            <HeroSection/>
            <LettersToSanaPage/>

            <AboutSection/>
            <FeelingsSection/>
            <MomentsSection/>
            <ForeverWithHerSection/>
            
            
           </main>


            {/* Fotter*/}
    </div>
}