import React, { useState } from 'react';
import { Menu, X, Music, Image, Info, Calendar } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: <Music className="w-5 h-5" /> },
  { label: 'Gallery', href: '#gallery', icon: <Image className="w-5 h-5" /> },
  { label: 'Music', href: '#music', icon: <Music className="w-5 h-5" /> },
  { label: 'About', href: '#about', icon: <Info className="w-5 h-5" /> },
  { label: 'Booking', href: '#booking', icon: <Calendar className="w-5 h-5" /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-3xl font-bold text-white tracking-wider">
            TEEMAN
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}