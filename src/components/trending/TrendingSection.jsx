import React from "react";
import TrendingCard from "./TrendingCard";
import Img1 from "../../assets/imgs/pic_1.jpg";
import Img2 from "../../assets/imgs/pic_2.jpg";
import Img3 from "../../assets/imgs/pic_3.jpg";
import SliderController from "../SliderController";

const TrendingSection = () => {
  const trendingPosts = [
    {
      id: 1,
      subTitle: "Nonadmin necess medicine",
      description: "Contact with sharp glass, sequela",
      postedTime: "2 mins ago",
      imgUrl: Img1,
    },
    {
      id: 2,
      subTitle: "Degen/vascul dis ear NOS",
      description: "Fistula of joint",
      postedTime: "2 hours ago",
      imgUrl: Img2,
    },
    {
      id: 3,
      subTitle: "Abn react-blood sampling",
      description: "Drug-induced gout, shoulder",
      postedTime: "3 hours ago",
      imgUrl: Img3,
    },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-60 pb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl uppercase my-10 font-bold text-center lg:text-left">
          Trending
        </h1>
        <SliderController/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingPosts.map((post) => (
          <TrendingCard
            key={post.id}
            imgUrl={post.imgUrl}
            subTitle={post.subTitle}
            description={post.description}
            postedTime={post.postedTime}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
