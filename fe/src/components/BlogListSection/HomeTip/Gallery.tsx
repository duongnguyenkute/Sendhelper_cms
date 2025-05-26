import React, { useState, useEffect } from 'react';
import GalleryList from './GalleryList';
import RevealOnScroll from '@/components/RevealOnScroll';

const Gallery = () => {

  return (
    <div className='px-[5%] mt-16 mb-90 lg:mb-50 bg-tertiary max-h-62.5'>
      <div className='p-4 max-w-320 mx-auto'>
        <div className='pt-8 lg:px-auto'>
          <div>
            <p className='text-primary uppercase font-semibold text-sm leading-7'>sendhelper</p>
            <h3 className='text-2xl leading-[1.4] mt-5 mb-2.5 font-semibold xl:mb-0 xl:text-[2rem]'>
              Book now for quality home services
            </h3>
          </div>

          <GalleryList/>
        </div>
      </div>
    </div>
  );
};

export default RevealOnScroll(Gallery);
