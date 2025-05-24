import React from 'react'

interface GalleryItemProps {
  img: string;
  title: string;      
}

const GalleryItem = ({ img, title }: GalleryItemProps) => {
  return (
    <div className=''>
      <a href="#" className='flex items-center flex-col lg:px-4 group'>
        <div className='mb-2 lg:mb-3 p-3 rounded-full transition duration-300 group-hover:bg-primary/10'>
          <img
            className='w-6 h-6 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110'
            src={img}
            alt={title}
          />
        </div>
        <p className='font-medium text-sm text-center leading-4 text-gray-700 group-hover:text-primary'>
          {title}
        </p>
      </a>
    </div>
  )
}

export default GalleryItem
