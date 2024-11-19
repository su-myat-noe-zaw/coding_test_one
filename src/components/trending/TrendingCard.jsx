import React from 'react'
import CardCaption from '../CardCaption'
import PostedDateTime from '../PostedDateTime'

const TrendingCard = ({ imgUrl, subTitle, description, postedTime }) => {
  return (
    <div className='rounded-md'>
        <div className="bg-cover rounded-t-lg bg-center w-full h-[150px] bg-no-repeat"
            style={{
            backgroundImage: `url(${imgUrl})`,
        }}></div>
        <div className='flex flex-col gap-3 p-6'>
            <CardCaption title={""} subTitle={subTitle} description={description} />
            <PostedDateTime label={postedTime}/>
        </div>
    </div>
  )
}

export default TrendingCard