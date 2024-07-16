"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { navLinks } from './constants';
import { ThemeSwitcher } from "./theme-switcher";

interface NavLink {
  id: string;
  title: string;
}

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="w-full flex items-center justify-between py-4 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh] left-0">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-8">
        <Link href="/" legacyBehavior>
          <a
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}>
            <h1 className="text-5xl font-bold uppercase">Eric Feng</h1>
          </a>
        </Link>

        <div className="hidden sm:flex flex-row gap-6 items-center">
          {navLinks.map((nav: NavLink) => (
            <Link key={nav.id} href={`#${nav.id}`} legacyBehavior>
              <a
                className={`hover:text-taupe ${active === nav.title ? 'text-french' : 'text-eerieBlack'} text-lg font-medium uppercase`}
                onClick={() => setActive(nav.title)}>
                {nav.title}
              </a>
            </Link>
          ))}
          <ThemeSwitcher />
        </div>

        <div className="sm:hidden flex items-center">
          <ThemeSwitcher />
          <button onClick={() => setToggle(!toggle)} className="p-2">
            {toggle ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {toggle && (
        <div className="sm:hidden flex flex-col items-center bg-flashWhite w-full absolute top-full left-0 py-4">
          {navLinks.map((nav: NavLink) => (
            <Link key={nav.id} href={`#${nav.id}`} legacyBehavior>
              <a
                className={`hover:text-taupe ${active === nav.title ? 'text-french' : 'text-eerieBlack'} text-lg font-medium uppercase my-2`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}>
                {nav.title}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;