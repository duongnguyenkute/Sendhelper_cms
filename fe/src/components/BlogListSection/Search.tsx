"use client"
import React from 'react'
import RevealOnScroll from '@/components/RevealOnScroll'

const Search = () => {
  return (
    <div className='px-[5%] max-w-320 mx-auto'>
        <div className='py-4 flex  justify-start lg:justify-end'>
            <input type="text" placeholder='Search articles...' className='max-w-100 min-h-14 w-full border rounded-md border-gray-400 p-4' />

        </div>
        
    </div>
  )
}

export default RevealOnScroll(Search);