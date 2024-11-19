import React from "react";
import Img1 from "../../assets/imgs/pic_1.jpg";
import Img2 from "../../assets/imgs/pic_2.jpg";
import Img3 from "../../assets/imgs/pic_3.jpg";
import SliderController from "../SliderController";
import LargeArticle from "./LargeArticle";
import SmallArticle from "./SmallArticle";

const HappeningNowSection = () => {
  const postsList = [
    {
      id: 1,
      category: "City",
      subTitle: "Nonadmin necess medicine",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry the industry's standard dummy",
      postedTime: "2 mins ago",
      imgUrl: Img1,
      author: "Author name",
    },
    {
      id: 2,
      category: "Travel",
      subTitle: "Degen/vascul dis ear NOS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry the industry's standard dummy",
      postedTime: "2 hours ago",
      imgUrl: Img2,
      author: "Author name",
    },
    {
      id: 3,
      subTitle: "Abn react-blood sampling",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry the industry's standard dummy",
      postedTime: "3 hours ago",
      imgUrl: Img3,
      author: "Author name",
    },
    {
      id: 4,
      subTitle: "Nonadmin necess medicine",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry the industry's standard dummy",
      postedTime: "2 mins ago",
      imgUrl: Img1,
      author: "Author name",
    },
    {
      id: 5,
      subTitle: "Degen/vascul dis ear NOS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry the industry's standard dummy",
      postedTime: "2 hours ago",
      imgUrl: Img2,
      author: "Author name",
    },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-60 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl uppercase my-6 font-bold text-center sm:text-left">
          Trending
        </h1>
        <SliderController />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* First two posts as large articles */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {postsList.slice(0, 2).map((post) => (
            <LargeArticle
              key={post.id}
              category={post.category || ""}
              title={post.subTitle}
              description={post.description}
              postedTime={post.postedTime}
              imgUrl={post.imgUrl}
            />
          ))}
        </div>
        {/* Small articles */}
        <div className="grid grid-cols-1 gap-6">
          {postsList.slice(2).map((post) => (
            <SmallArticle
              key={post.id}
              subTitle={post.subTitle}
              postedTime={post.postedTime}
              imgUrl={post.imgUrl}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappeningNowSection;
