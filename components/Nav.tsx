"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Nav: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#0a2240] text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="https://vit.ac.in/files/VIT-logo.webp"
            alt="VIT Logo"
            width={250}
            height={250}
          />
        </div>

        {/* Hamburger Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex text-sm items-center divide-x divide-white/20">
          <div className="px-3">
            <Link href="/" className="hover:underline">Home</Link>
          </div>

          <div className="px-3">
            <Dropdown title="Conference Info" items={[
              { label: "Welcome Message", href: "/welcome" },
              { label: "About ICNAN’25", href: "/about" },
              { label: "About VIT", href: "/about" },
              { label: "About CNR", href: "/about" },
              { label: "Themes", href: "/themes" },
              { label: "Highlights", href: "/conference/highlights" },
              { label: "Speakers", href: "/speakers" },
              { label: "Conference Schedule", href: "/conference/schedule" }
            ]} />
          </div>

          <div className="px-3">
            <Dropdown title="Organisers" items={[
              { label: "Organising Committee", href: "/organisers/organising-committee" },
              { label: "Advisory Committee", href: "/organisers/advisory-committee" }
            ]} />
          </div>

          <div className="px-3">
            <Dropdown title="Call for Papers" items={[
              { label: "Publications and Proceedings", href: "/callForPapers"},
              { label: "Research Awards", href: "/papers/research-awards" }
            ]} />
          </div>

          <div className="px-3">
            <Link href="/gallery" className="hover:underline">Gallery</Link>
          </div>

          <div className="px-3">
            <Dropdown title="Contact" items={[
              { label: "How to reach", href: "/contact/how-to-reach" },
              { label: "Accommodation", href: "/contact/accommodation" },
              { label: "For Enquiry", href: "/contact/enquiry" }
            ]} />
          </div>

          <div className="px-3">
            <Link href="/registration" className="hover:underline">Registration</Link>
          </div>

          <div className="px-3">
            <Link href="/faq" className="hover:underline">FAQ</Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a2240] text-white px-4 pb-4 space-y-2 text-sm">
          <Link href="/" className="block hover:underline">Home</Link>

          <MobileDropdown title="Conference Info" items={[
            { label: "Welcome Message", href: "/welcome" },
            { label: "About ICNAN’25", href: "/about" },
            { label: "About VIT", href: "/about" },
            { label: "About CNR", href: "/about" },
            { label: "Themes", href: "/themes" },
            { label: "Highlights", href: "/conference/highlights" },
            { label: "Speakers", href: "/speakers" },
            { label: "Conference Schedule", href: "/conference/schedule" }
          ]} />

          <MobileDropdown title="Organisers" items={[
            { label: "Organising Committee", href: "/organisers/organising-committee" },
            { label: "Advisory Committee", href: "/organisers/advisory-committee" }
          ]} />

          <MobileDropdown title="Call for Papers" items={[
            { label: "Publications and Proceedings", href: "/callForPapers" },
            { label: "Research Awards", href: "/papers/research-awards" }
          ]} />

          <Link href="/gallery" className="block hover:underline">Gallery</Link>

          <MobileDropdown title="Contact" items={[
            { label: "How to reach", href: "/contact/how-to-reach" },
            { label: "Accommodation", href: "/contact/accommodation" },
            { label: "For Enquiry", href: "/contact/enquiry" }
          ]} />

          <Link href="/registration" className="block hover:underline">Registration</Link>
          <Link href="/faq" className="block hover:underline">FAQ</Link>
        </div>
      )}
    </header>
  );
};

// Dropdown for desktop (show sub-menu on hover)
// Dropdown for desktop (smooth hover effect with delay)
const Dropdown = ({ title, items }: { title: string, items: { label: string, href: string }[] }) => {
    return (
      <div className="relative">
        <button className="peer hover:underline px-2 py-2">{title}</button>
        <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-50
                        invisible peer-hover:visible hover:visible
                        opacity-0 peer-hover:opacity-100 hover:opacity-100
                        transition-all duration-200">
          <ul className="py-2 divide-y divide-gray-200">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="block px-4 py-2 hover:bg-gray-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  // MobileDropdown with smoother hover
  const MobileDropdown = ({ title, items }: { title: string, items: { label: string, href: string }[] }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="relative group">
        <button onClick={() => setOpen(!open)} className="block w-full text-left font-semibold hover:underline">
          {title}
        </button>
        {open && (
          <ul className="pl-4 space-y-1 mt-1 divide-y divide-white/20">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="block py-1 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  

export default Nav;
