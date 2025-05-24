import React from 'react'

const footerData = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'PropertyGuru Singapore', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact us', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
]

const FooterList = () => {
  return (
    <nav aria-label="Footer navigation" className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:w-1/2">
      {footerData.map(({ title, links }) => (
        <div key={title} className="flex flex-col gap-1 lg:w-1/2">
          <h4 className="my-2.5 text-base leading-6 font-semibold">{title}</h4>
          <ul className='pt-1 flex flex-col gap-1'>
            {links.map(({ label, href }) => (
              <li key={label}>
                <a className="py-2 text-sm font-normal block Roboto" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default FooterList
