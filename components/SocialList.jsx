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
          <Link href={social.link} target="_blank">
            <Image
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
