import React from "react";
import BeginnerHero from "@/components/beginner-guide-components/BeginnerHero";
import About from "@/components/beginner-guide-components/About";
import PetsTypes from "@/components/beginner-guide-components/PetsTypes";
import PetAges from "@/components/beginner-guide-components/PetAges";
import FoodSection from "@/components/beginner-guide-components/FoodSection";
import Guides from "@/components/beginner-guide-components/Guides";
import SupportStages from "@/components/beginner-guide-components/SupportStages";
import FamilyPets from "@/components/beginner-guide-components/FamilyPets";
import YouTubeEmbed from "@/components/shared/ui/YouTubeEmbed";

const BeginnerGuide = () => {
  return (
    <div className="w-full">
      <BeginnerHero />
      <About />
      <PetsTypes />
      <PetAges />
      <FoodSection />
      <Guides />
      <FamilyPets />
      <SupportStages />
      <div className="flex flex-col items-center p-6 md:p-10 gap-8">
        <div className="w-full md:w-[60%] h-[220px] md:h-[400px]">
          <YouTubeEmbed
            videoId="peUVLEUj-AM"
            title="Owning a Dog - Things to Know Before Getting a Puppy"
          />
        </div>
      </div>
    </div>
  );
};

export default BeginnerGuide;
