import React from 'react'
import PostedDateTime from '../PostedDateTime'
import CardCaption from '../CardCaption'

const NewCard = ({title, subTitle, description, dateTime}) => {
  return (
    <div className='flex flex-col gap-2'>
      <CardCaption title={title} subTitle={subTitle} description={description}/>
      <PostedDateTime label={dateTime}/>
    </div>
  )
}

export default NewCard