import React from "react";
import New from "./New";
import catNew from "@/assets/home-media/1.webp";
import newPet from "@/assets/home-media/people-world-cutest-dog-contest-2-pedigree-062525-7a4ba847f3dd4b7ea76e4258f073ef45.webp";
import vet from "@/assets/home-media/APPA-Survey-Art-for-Goodnewsforpets-1024x491.webp";
import favPet from "@/assets/home-media/2025-GoGo-Photo-Banner_Open-Now_FB-Event-scaled.webp";

const News = () => {
  const news = [
    {
      date: "Yesterday",
      header:
        "San Francisco cat euthanized after contracting bird flu from raw pet food",
      photo: catNew,
      link: "https://timesofindia.indiatimes.com/life-style/relationships/pets/san-francisco-cat-euthanized-after-contracting-bird-flu-from-raw-pet-food-how-to-take-precautions-for-your-pets/articleshow/123712099.cms",
    },
    {
      date: "5 days ago",
      header: "The best new pet tech",
      photo: newPet,
      link: "https://www.ft.com/content/251173ac-f87b-4aa3-b740-97532e998ef5",
    },
    {
      date: "3 months ago",
      header:
        "Veterinarians warn against dogs ingesting non-edible items causing bowel obstructions",
      photo: vet,
      link: "https://www.dailytelegraph.com.au/lifestyle/experts-warning-to-pet-owners-the-new-deadly-trend-in-dogs/news-story/6e79da55502a2797005466d48d90508a",
    },
    {
      date: "3 months ago",
      header:
        "America’s Favourite Pets 2025: Buster the bulldog & Geno the cat win nationwide hearts",
      photo: favPet,
      link: "https://timesofindia.indiatimes.com/etimes/trending/meet-the-2025-americas-favourite-pets-buster-from-queens-and-geno-from-new-jersey-capturing-nationwide-love/articleshow/121218648.cms",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-10 py-10 px-4">
      <div className="capitalize text-2xl md:text-3xl font-semibold text-[#2F4156] text-center">
        news & vlogs
      </div>
      <div className="flex flex-wrap justify-center md:content-center md:justify-start items-start gap-7">
        {news.map((obj, index) => (
          <New obj={obj} key={index} />
        ))}
      </div>
    </div>
  );
};

export default News;
