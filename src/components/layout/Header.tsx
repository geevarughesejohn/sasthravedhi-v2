'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/vision', label: 'Vision' },
    { href: '/activities', label: 'Activities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/publications', label: 'Publications' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#145AC6] text-white shadow-md">
      <div className="container mx-auto px-4 py-3.5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/brand/logo.png"
            alt="Sasthravedhi Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="font-bold text-xl font-poppins tracking-tight block leading-tight">
              Sasthravedhi
            </span>
            <span className="text-[10px] text-blue-200 font-anek block leading-none">
              ശാസ്ത്രവേദി
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-blue-100 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            className="bg-[#00BCD4] hover:bg-[#00acc1] text-white font-bold px-4 py-2 rounded-full text-xs transition shadow-sm"
          >
            Join / Membership
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-blue-200 focus:outline-none"
          onClick={toggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <nav className="lg:hidden flex flex-col p-4 bg-[#0D3E83] border-t border-white/10 space-y-3 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggle}
              className="py-1 text-blue-100 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/membership"
              onClick={toggle}
              className="inline-block w-full text-center bg-[#00BCD4] hover:bg-[#00acc1] text-white font-bold px-4 py-2.5 rounded-xl text-xs transition"
            >
              Join / Membership
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
