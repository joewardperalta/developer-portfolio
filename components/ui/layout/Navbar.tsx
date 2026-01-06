import Link from "next/link";
import Logo from "../branding/Logo";
import Wrapper from "./Wrapper";
import ButtonLink from "../buttons/LinkButton";

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
          <ul className="capitalize font-medium text-heading flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <ButtonLink>
                  <Link href={item.link}>{item.name}</Link>
                </ButtonLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
}
