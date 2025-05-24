import React from 'react'

const Header = () => {
  return (
    <div className='pl-[2%] xl:pl-[0%] fixed top-0 left-0 right-0 z-50 bg-white object-fill shadow-md'>
      <div className='h-8 md:h-12 lg:h-20 flex justify-between items-center pl-[2%] xl:pl-[5%] 2xl:pl-22.5'>
        <img className='align-middle object-contain w-34 h-8 md:h-16' src="/images/logo.webp" alt="logo" />
      </div>
    </div>
  )
}

export default Header