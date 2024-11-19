"use client";
import Link from "next/link";
import Image from "next/image";

// data
import socials from "@/data/socials.json";
import { useEffect } from "react";

export default function SocialList({ className, light = true }) {
  return (
    <ul className={`${className} flex w-fit gap-6`}>
      {socials.map((social, index) => (
        <li key={index}>
          <Link
            className="inline-block transition-all ease-in-out hover:scale-125"
            href={social.link}
            target="_blank"
          >
            <Image
              className="h-5 w-5 tablet:h-7 tablet:w-7"
              src={light ? social.img.light.src : social.img.dark.src}
              alt={social.img.alt}
              width={32}
              height={32}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
