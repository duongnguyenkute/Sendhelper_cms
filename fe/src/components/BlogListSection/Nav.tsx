'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Latest', href: '/latest' },
  { label: 'Home Tips', href: '/' },
  { label: 'Editor’s Choice', href: '/editors-choice' },
  { label: 'Singapore Living', href: '/singapore-living' },
  { label: 'Home Projects & DIY', href: '/home-projects-diy' },
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="p-4 lg:py-2 lg:px-0 bg-secondary" aria-label="Main navigation">
      <ul className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-0 text-white">
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href

          return (
            <li className='md:w-1/2 md:mb-2 lg:w-auto lg:mb-0' key={href}>
              <Link
                href={href}
                className={`text-size-regular block py-2 px-4 lg:px-8 leading-[1.375rem] transition-all font-normal ${
                  isActive
                    ? 'border-b border-primary'
                    : 'border-b-0'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
