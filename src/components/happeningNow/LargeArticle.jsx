import React from "react";
import CardCaption from "../CardCaption";
import PostedDateTime from "../PostedDateTime";

const LargeArticle = ({
  imgUrl = "",
  category = "",
  title = "",
  description = "",
  postedTime = "",
}) => {
  return (
    <div className="relative w-full h-[350px]">
      <div
        className="bg-cover bg-center w-full h-full bg-no-repeat rounded-lg"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>

      {/* Caption */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-8">
        <h2 className="text-white uppercase font-bold">{category}</h2>
        <div className="flex flex-col gap-3">
          <CardCaption mode="light" title={title} description={description} />
          <PostedDateTime label={postedTime} />
        </div>
      </div>
    </div>
  );
};

export default LargeArticle;
