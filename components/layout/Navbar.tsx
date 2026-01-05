import Link from "next/link";
import Logo from "../branding/Logo";
import Wrapper from "./Wrapper";

const navItems = [
  {
    name: "home",
    link: "#",
  },
  {
    name: "skills",
    link: "#skills",
  },
  {
    name: "contact",
    link: "#contact",
  },
];

export default function Navbar() {
  return (
    <Wrapper>
      <div className="flex items-center justify-between py-6">
        <Logo />

        <nav>
          <ul className="capitalize font-medium text-heading flex gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
}
