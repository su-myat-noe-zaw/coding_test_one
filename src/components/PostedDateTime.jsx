import React from 'react'
import ClockIcon from '@heroicons/react/24/outline/ClockIcon'

const PostedDateTime = ({label, authorName = ""}) => {
  return (
    <div className='flex items-center gap-2'>
        <ClockIcon className='text-gray-light h-5 w-5'/>
        <div className='flex gap-1'>
          <p className='text-gray-light text-xs italic'>{label}</p>
          <p className='text-gray-light text-xs italic underline'>{authorName}</p>
        </div>
    </div>
  )
}

export default PostedDateTime