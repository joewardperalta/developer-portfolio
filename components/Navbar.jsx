"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);

  // This will open the nav coming from the left
  function toggleNav() {
    if (navRef) {
      navRef.current.classList.toggle("right-full");
      navRef.current.classList.toggle("left-0");
    }
  }

  return (
    <div className="mx-auto flex justify-between px-4 py-10 tablet:px-10 laptop:px-12 desktop:max-w-[1440px] desktop:px-12">
      <Logo />
      <Nav ref={navRef} toggleNav={toggleNav} />
      <HamburgerButton navRef={navRef} toggleNav={toggleNav} />
    </div>
  );
}

function Nav({ ref, toggleNav }) {
  return (
    <div
      ref={ref}
      className="fixed right-full top-0 h-full bg-secondary laptop:relative laptop:right-0 laptop:h-fit laptop:bg-primary"
    >
      <nav>
        <ul className="flex flex-col gap-8 px-6 py-[10rem] pr-[5rem] text-[1rem] font-medium leading-normal text-primary laptop:flex-row laptop:px-0 laptop:py-0 laptop:text-secondary">
          <li onClick={toggleNav}>
            <Link href="#about">About</Link>
          </li>
          <li onClick={toggleNav}>
            <Link href="#experience">Experience</Link>
          </li>
          <li onClick={toggleNav}>
            <Link href="#projects">Projects</Link>
          </li>
          <li onClick={toggleNav}>
            <Link href="#testimonials">Testimonials</Link>
          </li>
          <li onClick={toggleNav}>
            <Link href="#contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function HamburgerButton({ navRef, toggleNav }) {
  function Bar() {
    return <div className="h-1 w-8 rounded-full bg-secondary"></div>;
  }

  return (
    <button
      className="block space-y-1 laptop:hidden"
      onClick={toggleNav}
    >
      <Bar />
      <Bar />
      <Bar />
    </button>
  );
}
