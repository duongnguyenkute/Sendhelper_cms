import React from 'react'
import FooterList from './FooterList'
import FooterPay from './FooterPay'

const FooterRight = () => {
  return (
    <div className='flex flex-col gap-6 mb-6 lg:flex-row flex-1 lg:gap-8'>
        <FooterList />
        <FooterPay />
    </div>
  )
}

export default FooterRight