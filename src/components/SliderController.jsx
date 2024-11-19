import React from 'react'
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SliderController = () => {
  return (
    <div className="flex gap-6">
        <ChevronLeftIcon className="text-gray-light hover:text-gray-default h-5 w-5 cursor-pointer" />
        <ChevronRightIcon className="text-gray-light hover:text-gray-default h-5 w-5 cursor-pointer" />
    </div>
  )
}

export default SliderController