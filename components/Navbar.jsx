"use client";
import Link from "next/link";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);

  function showNav() {
    // check to make sure navRef is not null, if not null,
    // then we successfully got the nav element as refence
    if (!navRef.current) {
      return 0;
    }

    // show the nav
    navRef.current.classList.toggle("hidden");

    // disable browser scrolling
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("h-full");
  }

  return (
    <div className="px-5 py-6 tablet:px-8 tablet:py-10 desktop:mx-auto desktop:max-w-screen-desktop desktop:px-24">
      <div className="relative z-50 flex w-full justify-between">
        <Logo />
        <HamburgerButton onClick={showNav} />
      </div>
      <Nav ref={navRef} />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <a
        className="font-bold uppercase text-secondary tablet:text-lg"
        href="#"
      >
        Joeward Peralta
      </a>
    </div>
  );
}

function HamburgerButton({ onClick }) {
  return (
    <button className="space-y-1" onClick={onClick}>
      <div className="h-1 w-8 rounded-full bg-secondary"></div>
      <div className="h-1 w-8 rounded-full bg-secondary"></div>
    </button>
  );
}

function Nav({ ref }) {
  return (
    <div
      className="absolute left-0 top-0 z-10 hidden h-screen w-full bg-primary px-5 pb-6 pt-32 tablet:px-8"
      ref={ref}
    >
      <div className="desktop:mx-auto desktop:max-w-screen-desktop desktop:px-24">
        <nav className="border-b border-secondary pb-14">
          <ul className="space-y-7 font-bold uppercase text-secondary">
            <li>
              <Link href="#technologies">Technologies</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contacts">Contacts</Link>
            </li>
          </ul>
        </nav>

        <ul className="space-y-7 pt-14 font-bold uppercase text-secondary">
          <li>
            <Link href="mailto:joeward_peralta@outlook.com">
              E-mail
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/joewardperalta/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/joewardperalta?tab=repositories"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link href="tel:6479013040">Phone</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
