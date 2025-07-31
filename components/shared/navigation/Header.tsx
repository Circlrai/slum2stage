"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Button from "../Slum_Button"
import { Menu, X } from "lucide-react"
import logo from "../../../public/assets/images/Logo.svg"
import { useRouter } from "next/navigation"
import clsx from "clsx"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

const navigation = [
  { title: "About us", route: "/about-us" },
  { title: "Team", route: "/team" },
  { title: "Program", route: "/our-program" },
  { title: "News", route: "/news" },
  { title: "Contact Us", route: "/contact-us" },
  { title: "Become a Student", route: "/auth/register" }
]

export function Header() {
  const container = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const tl = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    // Initial setup for animations
    gsap.set(".mobile-menu-overlay", { y: "-100%", autoAlpha: 0 });
    gsap.set(".menu-link-item", { y: 20, autoAlpha: 0 });

    // Create timeline
    tl.current = gsap.timeline({ paused: true })
      .to(".mobile-menu-overlay", {
        y: "0%",
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => {
          document.body.style.overflow = "hidden";
        }
      })
      .to(".menu-link-item", {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3");
  }, { scope: container });

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();

    if (tl.current) {
      if (!isMenuOpen) {
        setIsMenuOpen(true);
        tl.current.play();
      } else {
        tl.current.reverse().then(() => {
          setIsMenuOpen(false);
          document.body.style.overflow = "";
        });
      }
    }
  }

  const closeMenu = () => {
    if (tl.current && isMenuOpen) {
      tl.current.reverse().then(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
      });
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDonate = () => {
    router.push("/donate")
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50" ref={container}>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black z-40 pointer-events-none mobile-menu-overlay opacity-0"
        onClick={closeMenu}
      />

      <div
        ref={headerRef}
        className={clsx(
          "mx-auto max-w-[80%] lg:max-w-6xl w-full px-4 py-2 flex items-center justify-between bg-white rounded-[40px] border border-gray-100 mt-8 transition-all duration-300",
          isScrolled && "header_shadow"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            loading="lazy"
            src={logo}
            alt="slum2stage logo"
            className="w-20 sm:w-28"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center space-x-6">
            {navigation.map((item, index) => (
              <li key={index} className="uppercase text-sm text-slum_gray_800 font-sf-display font-normal">
                <Link href={item.route}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex">
          <Button variant="circular-filled" text="DONATE" onClick={handleDonate} />
        </div>

        {/* Mobile menu toggle */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu-overlay fixed inset-0 z-50 bg-white w-full h-screen overflow-y-auto invisible">
        {/* Top Bar: Logo & Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
            <Image
              loading="lazy"
              src={logo}
              alt="slum2stage logo"
              className="w-20 sm:w-24"
            />
          </Link>
          <button onClick={closeMenu}>
            <X size={28} />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-start gap-4 px-6 pt-6">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="menu-link-item uppercase text-sm text-slum_gray_800 font-sf-display font-normal w-full opacity-0"
            >
              <Link
                href={item.route}
                onClick={closeMenu}
                className="block w-full py-3 px-4 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="menu-link-item w-full mt-4 px-4 opacity-0">
            <Button variant="circular-filled" text="DONATE" onClick={() => {
              handleDonate();
              closeMenu();
            }} />
          </li>
        </ul>
      </div>
    </header>
  )
}