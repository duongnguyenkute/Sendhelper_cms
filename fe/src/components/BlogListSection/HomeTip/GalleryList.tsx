import React, { useState } from 'react'
import GalleryItem from './GalleryItem'
import RevealOnScroll from '@/components/RevealOnScroll'
const galleryList = [
  { img: "/images/gallery1.svg", title: "Cleaning" },
  { img: "/images/gallery2.svg", title: "Deep Cleaning" },
  { img: "/images/gallery3.svg", title: "Laundry" },
  { img: "/images/gallery4.svg", title: "Handyman" },
  { img: "/images/gallery5.svg", title: "Air condition" },
  { img: "/images/gallery6.svg", title: "Elderly care" },
  { img: "/images/gallery7.svg", title: "COOKING" },
  { img: "/images/gallery8.svg", title: "PEST CONTROL" },
  { img: "/images/gallery9.svg", title: "TASKS & ERRANDS" },
]

const GalleryList = () => {
  const [showAll, setShowAll] = useState(false)

  const itemsToDisplay = showAll ? galleryList : galleryList.slice(0, 6)

  return (
    <div className="px-4 lg:px-0 py-8 xl:p-12 xl:mt-10 bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="hidden xl:flex gap-4">
        {galleryList.map((item) => (
          <GalleryItem key={item.title} img={item.img} title={item.title} />
        ))}
      </div>
      <div className="xl:hidden grid grid-cols-3 lg:grid-cols-6 gap-4">
        {itemsToDisplay.map((item) => (
          <GalleryItem key={item.title} img={item.img} title={item.title} />
        ))}
      </div>

      {galleryList.length > 6 && (
        <div className="xl:hidden mt-6 text-center text-primary">
          <button
            className=""
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  )
}

export default RevealOnScroll(GalleryList);
