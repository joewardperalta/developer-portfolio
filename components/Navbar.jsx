import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mx-auto flex justify-between py-10 desktop:max-w-[1248px]">
      <Logo />
      <Nav />
    </div>
  );
}

function Logo() {
  return (
    <Link
      className="text-[1.125rem] font-bold uppercase leading-[1.6] text-secondary"
      href="#"
    >
      Joeward Peralta
    </Link>
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
          <Link href="#portfolio">Portfolio</Link>
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
