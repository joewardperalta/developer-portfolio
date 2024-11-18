import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="mx-auto flex justify-between py-10 desktop:max-w-[1248px]">
      <Logo />
      <Nav />
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul className="flex gap-8 text-[1rem] font-medium leading-normal text-secondary">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
