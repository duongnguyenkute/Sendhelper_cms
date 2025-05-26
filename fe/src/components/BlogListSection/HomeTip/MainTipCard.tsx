import React from 'react'
import { HomeTip } from '@/types/home-tip'
import { formatDate } from '@/utils/date'
import RevealOnScroll from "@/components/RevealOnScroll"
const MainTipCard = ({tip}: {tip: HomeTip}) => {

  return (
    <div className='h-full'>
      <div className='lg:h-full relative p-8 min-h-86 h-[53vh] flex flex-col justify-end cursor-pointer'>
        <div className='text-white'>
          <p className='text-sm leading-7 font-normal'> { tip.category } </p>
          <h3 className='text-lg font-semibold leading-[1.4] mb-2.5 mt-5 hover:underline transition-all duration-200 ease-in-out'> { tip.name } </h3>
          <p className='h-12 overflow-hidden text-base leading-6 mb-2.5'> { tip.postSummary } </p>
          <p className='text-xs leading-4 font-normal'> { formatDate(tip.publishedDate) } </p>
        </div> 
        <div className='z-[-1] absolute inset-0 bg-cover'>
        <img src={ tip.thumbnailImage || "/images/general-img.webp" } alt={ tip.name } className='w-full object-cover max-w-full h-full rounded-2xl' />
        </div>

      </div>
    </div>
  )
}

export default RevealOnScroll(MainTipCard); 