import React from "react";
import Hero from "@/components/home-components/Hero";
import Services from "@/components/home-components/Services";
import ShopNow from "@/components/home-components/ShopNow";
import Track from "@/components/home-components/Track";
import Nearby from "@/components/home-components/Nearby";
import Upcoming from "@/components/home-components/Upcoming";
import News from "@/components/home-components/News";

const Home = () => {
  return (
    <div className="font-[Poppins]">
      <Hero />
      <Services />
      <ShopNow />
      <Track />
      <Nearby />
      <Upcoming />
      <News />
    </div>
  );
};

export default Home;
