import protection from "@/assets/beginner-media/pexels-tahir-x-lf-2153788153-33394308.webp";
import clean from "@/assets/beginner-media/pexels-goochie-poochie-19145890.webp";
import healthy from "@/assets/beginner-media/pexels-helen1-16395147.webp";
import love from "@/assets/beginner-media/pexels-annetnavi-792775.webp";
import soraImg from "@/assets/beginner-media/sora.webp";
import hamsterImg from "@/assets/beginner-media/hamster.webp";
import dogImg from "@/assets/beginner-media/dog.webp";
import parrotImg from "@/assets/beginner-media/parrot.webp";
import rabbitImg from "@/assets/beginner-media/rabbit.webp";
import turtleImg from "@/assets/beginner-media/turtle.webp";

export const pets = [
  { id: 1, type: "Cat", photo: soraImg },
  { id: 2, type: "Hamster", photo: hamsterImg },
  { id: 3, type: "Dog", photo: dogImg },
  { id: 4, type: "Parrot", photo: parrotImg },
  { id: 5, type: "Rabbit", photo: rabbitImg },
  { id: 6, type: "Turtle", photo: turtleImg },
];

export const petAges = [
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

export const supportStages = [
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

export const petCareGuides = [
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
