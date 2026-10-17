'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Experience', '#experience'],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#" aria-label="Tahir home">
        tahir<span>.</span>
      </a>
      <nav
        className={open ? 'main-nav is-open' : 'main-nav'}
        id="main-navigation"
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contact" className="mobile-contact" onClick={() => setOpen(false)}>
          Let’s talk ↗
        </a>
      </nav>
      <a className="header-contact" href="#contact">
        Let’s talk <ArrowUpRight size={15} />
      </a>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="main-navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
