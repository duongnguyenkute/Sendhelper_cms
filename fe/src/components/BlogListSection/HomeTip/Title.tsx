import React from 'react'
import RevealOnScroll from '@/components/RevealOnScroll'

const Title = () => {
  return (
    <div>
      <h2 className="pl-[5%] text-2xl lg:text-[2rem] font-semibold text-gray-800 w-full max-w-320 mx-auto">
        Home Tips
      </h2>
    </div>
  )
}

export default RevealOnScroll(Title);
