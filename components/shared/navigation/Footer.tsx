"use client"

import { Image } from '@heroui/image'
import Link from 'next/link'
import { FaInstagram, FaYoutube } from 'react-icons/fa'



const company = [
  { label: "Team", href: "/team" },
  { label: "Program", href: "/our-program" },
  { label: "News", href: "/news" },
  { label: "Register", href: "/auth/register" }
]


const mobileLink = [
  { label: "About Us", href: "/about-us" },
  { label: "Team", href: "/team" },
  { label: "Program", href: "/our-program" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact-us" }
]


const contact = [
  { label: "info@slum2stage.org", href: "mailto:info@slum2stage.org" },
  { label: "+234 (817 623 1834)", href: "tel: +234 (817 623 1834)" },
  { label: "Contact Us", href: "/contact-us" },
]

const Footer = () => {
  return (
    <footer className="bg-black text-white lg:pt-4 lg:pb-4 w-full" >
      <div className="max-w-7xl mx-auto flex flex-col px-4 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between py-16">
          {/* Logo */}
          <div className="flex items-start -pl-3 lg:-pl-0 pt-4 lg:pt-0 -mt-0 lg:-mt-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                loading="lazy"
                src="/assets/images/Logo.svg"
                alt="slum2stage logo" />
            </Link>
          </div>

          <div className="flex md:hidden pt-24">
            {/* Company links */}
            <ul className="flex flex-col space-y-4 uppercase">
              {mobileLink.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className='text-whitefont-sans font-normal text-sm'>
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-4">
            {/* Company links */}
            <div>

              <h3 className="text-sm font-sans font-normal mb-4 text-white">COMPANY</h3>
              <ul className="space-y-4">
                {company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='text-[#667085] hover:text-white 
                    font-sans font-normal text-sm'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

            {/* Contact info */}
            <div>

              <h3 className="text-sm font-normal mb-4 font-sans text-white">CONTACT</h3>
              <ul className="space-y-2">
                {contact.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className='text-[#667085] hover:text-white font-sans font-normal text-sm'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
        <hr className="hidden md:block border-t border-[#26272B] border-opacity-20" />
        <div className="hidden md:flex justify-between py-16">
          <div>

            <p className="text-gray-500 text-sm font-sans">&copy; {new Date().getFullYear()} Slum2Stage. All rights reserved.</p>

          </div>
          <div className="flex gap-x-4 ">
            <Link href="#" className="p-2 px-4 flex space-x-2 border border-slum_gray_800 text-slum_gray_200 font-sans text-sm font-normal rounded-full">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </Link>

            <Link href="#" className="p-2 px-4 flex space-x-2 border border-slum_gray_800 text-slum_gray_200 font-sans text-sm font-normal rounded-full">
              <FaYoutube size={20} />
              <span>Youtube</span>
            </Link>
          </div>
        </div>
      </div>
      <hr className="block md:hidden bg-[#26272B] h-[1px]" />

    </footer >
  )
}

export default Footer
