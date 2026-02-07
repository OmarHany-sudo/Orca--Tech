'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const comingSoon = () => {
    alert('Arabic version is coming soon 🚀');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Back-End', href: '/services/backend' },
        { name: 'Desktop Apps', href: '/services/desktop-apps' },
      ],
    },
    {
      name: 'Locations',
      href: '#',
      dropdown: [
        { name: 'Egypt', href: '/egypt' },
        { name: 'Saudi Arabia', href: '/saudi-arabia' },
        { name: 'Global', href: '/global' },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={isScrolled ? '/logo.png' : '/logo2.jpg'}
            alt="OrcaTech Logo"
            className="h-10 w-auto transition-all duration-300"
          />
        </Link>

        {/* ================= Desktop Nav ================= */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <button className="font-medium text-gray-700 hover:text-orca-blue">
                  {link.name}
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible z-50">
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-orca-blue hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-orca-blue"
              >
                {link.name}
              </Link>
            )
          )}

          {/* ===== Language Switcher (HONEST) ===== */}
          <div className="flex items-center border-l border-gray-300 pl-6 ml-2 gap-2">
            <button className="px-3 py-1 rounded text-sm font-medium bg-orca-blue text-white cursor-default">
              EN
            </button>
            <button
              onClick={comingSoon}
              className="px-3 py-1 rounded text-sm font-medium text-gray-400 hover:text-orca-blue"
              title="Arabic coming soon"
            >
              AR
            </button>
          </div>
        </nav>

        {/* ================= Mobile Button ================= */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col space-y-2">
                    <span className="font-medium text-gray-700">{link.name}</span>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="pl-4 text-gray-600 hover:text-orca-blue"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-orca-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Language Switcher Mobile */}
            <div className="flex gap-3 pt-4 border-t">
              <span className="px-3 py-1 rounded text-sm bg-orca-blue text-white">
                EN
              </span>
              <button
                onClick={comingSoon}
                className="px-3 py-1 rounded text-sm text-gray-400"
              >
                AR (Soon)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}