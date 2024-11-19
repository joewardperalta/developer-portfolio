import Link from "next/link";

export default function Logo({ className }) {
  return (
    <Link
      className={`text-[1.125rem] font-black uppercase leading-[1.6] text-secondary ${className}`}
      href="#"
    >
      Joeward Peralta
    </Link>
  );
}
