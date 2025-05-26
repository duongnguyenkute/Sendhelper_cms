import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
const Footer = () => {
  return (
      <div className='px-[5%] max-w-320 mx-auto'>
          <div className='2xl:mx-auto py-20 2xl:max-w-320 flex flex-col gap-12 lg:flex-row-reverse w-full justify-between'>
            <FooterRight />
            <FooterLeft />
          </div>
      </div>
    )
}

export default Footer