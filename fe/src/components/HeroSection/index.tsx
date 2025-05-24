import React from 'react'

const HeroSection = () => {
  return (
    <div className='mt-8 md:mt-12 lg:mt-20 relative min-h-100 flex items-center w-full'>
      <div className='px-[5%] w-full'>
        <div className='lg:max-w-17/20 lg:mx-auto 2xl:max-w-280 py-16 md:pt-8 align-center w-full flex items-center min-h-147.5 md:min-h-100 lg:min-h-auto'>
          <div className='text-white w-full'>
            <p className='text-lg font-bold leading-8 mx-5 sm:mx-0'>Sendhelper</p>
            <h1 className='mt-5 mb-2.5 text-[2rem] leading-[1.4] font-bold'>Our Blog - The Sendhelper Total Home Care</h1>
            <p className='pb-2.5 text-size-regular w-6/10 font-semibold'>Expert advice, guides and latest information on keeping your home clean, cosy and beautiful.</p>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 z-[-1]'>
        <img className='hidden md:block object-cover w-full h-full align-middle' src="/images/banner-wed.webp" alt="banner wed" />
        <img className='block md:hidden object-cover w-full h-full align-middle' src="/images/banner-mobile.webp" alt="banner mobile" />
      </div>
    </div>
  )
}

export default HeroSection