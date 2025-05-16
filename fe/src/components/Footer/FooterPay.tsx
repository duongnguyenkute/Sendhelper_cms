import React from 'react'

const paymentMethods = [
  { src: 'images/pay1.webp', alt: 'Payment method 1' },
  { src: 'images/pay2.webp', alt: 'Payment method 2' },
  { src: 'images/pay3.webp', alt: 'Payment method 3' },
  { src: 'images/pay4.webp', alt: 'Payment method 4' },
  { src: 'images/pay5.webp', alt: 'Payment method 5' },
  { src: 'images/pay6.webp', alt: 'Payment method 6' },
  { src: 'images/pay7.webp', alt: 'Payment method 7' },
  { src: 'images/pay8.webp', alt: 'Payment method 8' },
  { src: 'images/pay9.webp', alt: 'Payment method 9' },
  { src: 'images/pay10.webp', alt: 'Payment method 10' },
  { src: 'images/pay11.webp', alt: 'Payment method 11' },
  { src: 'images/pay12.webp', alt: 'Payment method 12' },
]

const FooterPay = () => {
  return (
    <footer className="lg:pt-2.5 flex flex-col gap-1 lg:w-1/4">
      <h4 className="mb-2.5 text-base leading-6 font-semibold">Ways to pay</h4>
      <div className="grid grid-cols-12 lg:grid-cols-4 gap-4">
        {paymentMethods.map((method, index) => (
          <div key={index} className=" h-auto">
            <img src={method.src} alt={method.alt} className="object-contain" />
          </div>
        ))}
      </div>
    </footer>
  )
}

export default FooterPay
