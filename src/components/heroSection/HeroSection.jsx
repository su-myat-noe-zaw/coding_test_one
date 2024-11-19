import React from "react";
import HeroImg from "../../assets/imgs/pic_3.jpg";
import Button from "../Button";
import NewCard from "./NewCard";
import SliderController from "../SliderController";

const HeroSection = () => {
  const newsList = [
    {
      id: 1,
      title: "Amazing Destinations",
      subTitle: "Travel",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry the industry's standard dummy",
      dateTime: "1 hour ago",
    },
    {
      id: 2,
      title: "Tech Innovations",
      subTitle: "Technology",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry the industry's standard dummy",
      dateTime: "2 mins ago",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* left column with hero image */}
      <div className="relative w-full lg:w-[65%] h-[300px] lg:h-[500px]">
        <div
          className="bg-cover bg-center w-full h-full bg-no-repeat"
          style={{
            backgroundImage: `url(${HeroImg})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Caption */}
        <div className="absolute inset-0 px-4 lg:px-52 flex flex-col justify-center items-start gap-5">
          <h2 className="text-white text-xl lg:text-2xl font-semibold uppercase">
            World News
          </h2>
          <hr className="h-[2px] w-full bg-white" />
          <div>
            <p className="text-white text-lg lg:text-2xl mb-2">
              Amazing places in America to visit.
            </p>
            <p className="text-white text-xs lg:text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum.
            </p>
          </div>
          <Button label={"Learn More"} />
        </div>
      </div>

      {/* right column for content */}
      <div className="w-full lg:w-[35%] flex flex-col gap-8 justify-center px-4 lg:px-20 mt-10 lg:mt-0">
        <div className="flex justify-between items-center">
          <h1 className="text-lg lg:text-xl font-semibold uppercase">
            More News
          </h1>
          <SliderController/>
        </div>

        <hr className="w-full bg-gray-light" />

        {/* News List */}
        {newsList.map((news) => (
          <NewCard
            key={news.id}
            title={news.title}
            subTitle={news.subTitle}
            description={news.description}
            dateTime={news.dateTime}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;