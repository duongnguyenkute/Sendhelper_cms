import React from 'react'
import FooterSocial from './FooterSocial'
const FooterLeft = () => {
  return (
    <div className='lg:w-1/3'>
      {/* Logo */}
      <div>
            <img className='h-12' src="images/logo.webp" alt="logo" />
      </div>
      {/* Language */}
      <div className='my-6'>
        <div className='inline-flex items-center gap-2 border-1 border-gray-200 rounded-4xl p-4 cursor-pointer'>
          <img src="/images/language.svg" alt="" />
          <div className='pr-6 text-sm leading-6'><a href="">Singapore | English</a></div>
          <img src="/images/down.svg" alt="" />
        </div>
      </div>
      <p className='text-sm leading-7 mb-2.5 text-gray-400'>1 Paya Lebar Link, #12-01/04, Paya Lebar Quarter, PLQ, #1, Singapore 408533</p>
      <FooterSocial />
      <p className='text-sm leading-7 text-gray-400 mt-5'>
        ©2024 Sendhelper. Sendtech Pte. Ltd. (201434475Z)
        <br />
        All rights reserved.
      </p>
      
    </div>
  )
}

export default FooterLeft