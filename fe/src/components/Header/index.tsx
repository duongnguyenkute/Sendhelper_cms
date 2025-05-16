import React from 'react'

const Header = () => {
  return (
    <div className='h-8 md:h-12 lg:h-20 flex justify-between items-center pl-[5%] xl:pl-22.5'>
        <img className='align-middle object-contain w-34 md:h-16' src="/images/logo.webp" alt="logo" />
    </div>
  )
}

export default Header