import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { Routes } from '@enums/routes.enum';
import useWindowPosition from '@utils/use-window-position';

import Logo from '../public/assets/logo.svg';
import Hamburger from '../public/assets/logo.svg';

const NavBar: React.FC = () => {
  const position = useWindowPosition();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const isHomePage = !!(router?.pathname === '/');

  const navItemClassName =
    'md:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-red-700';

  const scrollDownClasses =
    position > 50 || !isHomePage ? 'md:mt-0' : 'md:-mt-28';

  const whiteNavBar = position > 50 ? 'bg-white' : '';

  const navControls =
    menuOpen || position > 50
      ? 'text-black'
      : isHomePage
      ? 'text-white'
      : 'text-black';

  const menuOpenClasses = menuOpen ? 'h-full md:h-auto' : 'h-0 md:h-auto';

  return (
    <>
      <div
        className={`${whiteNavBar} fixed z-20 md:hidden w-full transition-all duration-300 ease-in-out top-0`}
      >
        <div
          className={`container flex mx-auto py-5 ${navControls} transition-all duration-300 ease-in-out`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 md:hidden mr-6"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <img
            src={Logo}
            alt="andy's american kustoms logo"
            className="mr-10 w-24"
          />
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden w-full bg-white fixed top-0 z-10 md:py-5 ${scrollDownClasses} ${menuOpenClasses}`}
      >
        <div className="container mx-auto">
          <nav className="flex flex-col md:flex-row">
            <img
              src={Logo}
              alt="andy's american kustoms logo"
              className="mr-10 w-28 hidden md:block"
            />
            <ul className="md:flex mt-16 md:mt-0 items-center pt-4 md:pt-0 uppercase font-medium">
              {Object.keys(Routes).map((key, i) => (
                <Link key={i} href={Routes[key]} passHref>
                  <a className={navItemClassName}>{key}</a>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
