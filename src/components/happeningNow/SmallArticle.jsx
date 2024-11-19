import React from "react";
import HeroImg from "../../assets/imgs/pic_3.jpg";
import CardCaption from "../CardCaption";
import PostedDateTime from "../PostedDateTime";

const SmallArticle = ({
  subTitle = "",
  postedTime = "",
  imgUrl = "",
  author = "",
}) => {
  return (
    <div className='rounded-md w-full'>
        <div className="bg-cover rounded-lg bg-center w-full h-[150px] bg-no-repeat"
            style={{
            backgroundImage: `url(${imgUrl})`,
        }}></div>
        <div className='flex flex-col py-3'>
            <CardCaption title={""} subTitle={subTitle} />
            <PostedDateTime label={`${postedTime} by`} authorName={author}/>
        </div>
    </div>
  );
};

export default SmallArticle;
