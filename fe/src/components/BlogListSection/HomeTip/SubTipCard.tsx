import { HomeTip } from '@/types/home-tip'
import { formatDate } from '@/utils/date'
import React from 'react'

const SubTipCard = ({tip}: {tip: HomeTip}) => {

  return (
    <div className="flex shadow-md rounded-xl overflow-hidden max-h-[150px] lg:max-h-none h-full">
      <div className="w-1/3">
        {tip.thumbnailImage && (
          <img
            src={tip.thumbnailImage}
            alt={tip.name}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="px-5 py-2 lg:p-6 w-2/3 flex flex-col justify-center min-h-[128px]">
        <p className="hidden lg:block text-quaternary text-sm"> {tip.category} </p>
        <h3 className="text-sm font-medium leading-snug lg:mt-5 lg:pb-2.5 lg:font-semibold lg:text-xl hover:underline ransition-all duration-200 ease-in-out">{tip.name}</h3>
        <p className='hidden lg:block text-base font-normal leading-6 mb-2.5'>{tip.postSummary}</p>
        <p className="text-gray-500 text-sm mt-2">{formatDate(tip.publishedDate)}</p>
      </div>
    </div>
  )
}

export default SubTipCard