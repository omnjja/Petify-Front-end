import React from "react";
import BeginnerHero from "../components/beginner-guide-components/BeginnerHero";
import { Link } from "react-router-dom";
import UseLoggedUser from "../hooks/UseLoggedUser";
import soraImg from "@/assets/beginner-media/sora.webp";
import hamsterImg from "@/assets/beginner-media/hamster.webp";
import dogImg from "@/assets/beginner-media/dog.webp";
import parrotImg from "@/assets/beginner-media/parrot.webp";
import rabbitImg from "@/assets/beginner-media/rabbit.webp";
import turtleImg from "@/assets/beginner-media/turtle.webp";
import ageGuideImg from "@/assets/beginner-media/pexels-helen1-16395151.webp";
import foodHealthImg from "@/assets/beginner-media/pexels-enginakyurt-1437465.webp";
import petsFamilyImg from "@/assets/beginner-media/image (4).webp";
import protection from "@/assets/beginner-media/pexels-tahir-x-lf-2153788153-33394308.webp";
import clean from "@/assets/beginner-media/pexels-goochie-poochie-19145890.webp";
import healthy from "@/assets/beginner-media/pexels-helen1-16395147.webp";
import love from "@/assets/beginner-media/pexels-annetnavi-792775.webp";

const BeginnerGuide = () => {
  const logged = UseLoggedUser();
  const pets = [
    { id: 1, type: "Cat", photo: soraImg },
    { id: 2, type: "Hamster", photo: hamsterImg },
    { id: 3, type: "Dog", photo: dogImg },
    { id: 4, type: "Parrot", photo: parrotImg },
    { id: 5, type: "Rabbit", photo: rabbitImg },
    { id: 6, type: "Turtle", photo: turtleImg },
  ];

  const petAges = [
    {
      id: 1,
      age: "Puppy/Kitten (0-1 year)",
      needs: "Needs more training, frequent feeding, and vaccinations",
    },
    {
      id: 2,
      age: "Adult (1-7 years)",
      needs: "Balanced diet, regular vet checkups, active play.",
    },
    {
      id: 3,
      age: "Aged (7+ years)",
      needs: "Softer food, gentler exercise, more health monitoring.",
    },
  ];

  const supportStages = [
    {
      id: 1,
      stage: "Vet Visits",
      description: "health checks & vaccines",
      section: "vets",
    },
    {
      id: 2,
      stage: "Grooming",
      description: "fur care, bathing, nail trimming",
      section: "services",
    },
    {
      id: 3,
      stage: "Training",
      description: "obedience & behavior",
      section: "services",
    },
    {
      id: 4,
      stage: "Pet Suppliers",
      description: "food, medicine, toys",
      section: "shop",
    },
    {
      id: 5,
      stage: "Pet Sitting",
      description: "when you travel",
      section: "services",
    },
  ];

  const petCareGuides = [
    {
      id: 1,
      title: "Protection Comes First",
      text: "Core vaccines protect against dangerous diseases. Puppies and kittens get a series of shots in the first months, then annual boosters. Always consult your vet for the right schedule.",
      photo: protection,
    },
    {
      id: 2,
      title: "Clean Pet, Happy Pet",
      text: "Brush fur, trim nails, bathe when needed, and clean ears. Grooming prevents infections and keeps pets comfortable.",
      photo: clean,
    },
    {
      id: 3,
      title: "Healthy Body, Happy Mind",
      text: "Walks, toys, and training keep pets fit and prevent boredom. Different pets have different activity needs — know yours!",
      photo: healthy,
    },
    {
      id: 4,
      title: "Love is the Best Care",
      text: "Spend quality time, learn your pet’s body language, and create a safe environment. A happy pet is a healthy pet.",
      photo: love,
    },
  ];

  return (
    <div className="w-full">
      <BeginnerHero />

      <div className="flex flex-col w-[90%] md:w-[80%] m-auto p-6 md:p-10 gap-4">
        <p className="text-[#FD7E14] capitalize text-2xl md:text-4xl font-semibold">
          about petify
        </p>
        <div className="flex flex-col md:flex-row justify-between text-[#2F4156] gap-6">
          <div className="w-full md:w-[45%] text-sm">
            Petify is a one-stop digital hub designed to make pet care simple,
            reliable, and stress-free. From booking veterinary visits and
            grooming sessions to arranging training programs and safe boarding,
            Petify connects pet owners with trusted service providers all in one
            place.
          </div>
          <div className="w-full md:w-[45%] text-sm">
            At Petify, we believe pets are family. That’s why we go beyond just
            appointments — we empower owners with tools to manage their pets’
            daily needs, access verified providers, and explore tailored
            services that match their lifestyle.
          </div>
        </div>
        <Link to={logged ? `/` : `/signup`}>
          <button className="cursor-pointer w-fit px-5 py-2 rounded-[10px] bg-[#2F4156] text-white font-semibold">
            Get Started
          </button>
        </Link>
      </div>

      <div className="flex flex-col items-center p-6 md:p-10 gap-4 bg-[#F8F9FA]">
        <div className="flex flex-col md:items-start gap-1 text-center md:text-left">
          <p className="text-[#2F4156] capitalize text-2xl md:text-4xl font-semibold">
            every pet is unique
          </p>
          <p className="text-[#2F4156] text-sm md:text-base">
            Dogs, cats, birds, rabbits — each has different needs. Consider your
            lifestyle, home space, and budget before choosing.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {pets.map((pet) => (
            <div key={pet.id} className="flex flex-col items-center gap-2">
              <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] overflow-hidden flex items-center transition-transform duration-300 hover:scale-[1.03]">
                <img
                  src={pet.photo}
                  alt={pet.type}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-[#2F4156] font-semibold">{pet.type}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 md:p-9 gap-6 md:gap-12">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-[#FD7E14] capitalize text-2xl md:text-4xl font-semibold">
            know their age, know their needs
          </p>
          <div className="flex flex-col gap-6 md:gap-8 py-5">
            {petAges.map((age) => (
              <div key={age.id} className="flex flex-col gap-2">
                <p className="text-[#2F4156] font-semibold text-lg md:text-xl">
                  {age.age}
                </p>
                <p className="text-[#2F4156] text-sm">{age.needs}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden w-full md:w-1/2 h-[250px] md:h-[400px] overflow-hidden md:flex items-center">
          <img
            src={ageGuideImg}
            alt="pet age guide"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-[70px] py-6 md:py-[30px] gap-6">
        <div className="w-full md:w-[550px] h-[250px] md:h-[400px] overflow-hidden flex items-center">
          <img
            src={foodHealthImg}
            alt="food is health"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 md:px-[50px] w-full md:w-[37%] text-center md:text-left">
          <h5 className="text-[#2F4156] font-semibold text-2xl md:text-3xl capitalize">
            Food is health
          </h5>
          <p className="text-[#2f415677] text-sm md:text-base">
            Give age-appropriate food, fresh water daily, and avoid human junk
            food. Dogs and cats need protein-rich diets; birds need seeds and
            fresh greens.
          </p>
        </div>
      </div>

      <div className="bg-[#F8F9FA] px-6 md:px-16 py-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#2F4156] text-center mb-10">
          Guides
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 md:max-w-[80%] mx-auto">
          {petCareGuides.map((guide) => (
            <div
              key={guide.id}
              className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              <div className="w-full h-[220px] md:h-[260px] overflow-hidden">
                <img
                  src={guide.photo}
                  alt={guide.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-[#2F4156] text-lg md:text-xl font-semibold">
                  {guide.title}
                </h3>
                <p className="text-[#2f415677] text-sm md:text-base leading-relaxed">
                  {guide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row py-10 px-6 md:px-10 w-[90%] md:w-[85%] m-auto items-center gap-6">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-[#FD7E14] text-2xl md:text-4xl font-semibold">
            Pets are more than companions, they are family.
          </p>
          <p className="text-[#2F4156] text-sm md:text-base md:w-[60%]">
            They bring joy, comfort, and unconditional love into our lives,
            teaching us responsibility, patience, and empathy. Caring for a pet
            can reduce stress, boost happiness, and even improve our physical
            health through play and daily routines.
          </p>
        </div>
        <div className="w-full md:w-[520px] h-[260px] md:h-[320px] overflow-hidden">
          <img
            src={petsFamilyImg}
            alt="pets are family"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col items-center p-6 md:p-10 gap-3 md:gap-8">
        <p className="text-[#FD7E14] capitalize text-2xl md:text-4xl font-semibold">
          support for every stage
        </p>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-7 justify-center md:justify-start">
          {supportStages.map((stage) => (
            <div
              key={stage.id}
              className="flex flex-col items-center gap-1 px-2 text-center"
            >
              <Link to={`/${stage.section}`}>
                <p className="text-[#2F4156] font-semibold text-lg md:text-2xl">
                  {stage.stage}
                </p>
              </Link>
              <p className="text-[#2f415677] text-sm md:text-base">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center p-6 md:p-10 gap-8">
        <div className="w-full md:w-[60%] h-[220px] md:h-[400px]">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/peUVLEUj-AM"
            title="Owning a Dog - Things to Know Before Getting a Puppy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BeginnerGuide;
