import React from "react";
import New from "./New";
import { news } from "@/constants/news";

const News = () => {
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
