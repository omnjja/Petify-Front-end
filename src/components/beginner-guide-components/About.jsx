import React from "react";

const About = () => {
  return (
    <div className="flex flex-col w-[90%] md:w-[80%] m-auto p-6 md:p-10 gap-4">
      <p className="text-[#FD7E14] capitalize text-2xl md:text-4xl font-semibold">
        about petify
      </p>
      <div className="flex flex-col md:flex-row justify-between text-[#2F4156] gap-6">
        <div className="w-full md:w-[45%] text-sm">
          Petify is a one-stop digital hub designed to make pet care simple,
          reliable, and stress-free. From booking veterinary visits and grooming
          sessions to arranging training programs and safe boarding, Petify
          connects pet owners with trusted service providers all in one place.
        </div>
        <div className="w-full md:w-[45%] text-sm">
          At Petify, we believe pets are family. That’s why we go beyond just
          appointments — we empower owners with tools to manage their pets’
          daily needs, access verified providers, and explore tailored services
          that match their lifestyle.
        </div>
      </div>
    </div>
  );
};

export default About;
