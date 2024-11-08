import Image from "next/image";
import Link from "next/link";
import Heading3 from "./Typography/Heading3";

export default function Project({
  title,
  description,
  tags,
  img,
  startDate,
  endDate,
  link,
}) {
  return (
    <Link className="inline-block" href={link} target="_blank">
      <div className="mb-4 overflow-hidden rounded-default">
        <Image
          className="h-full w-full object-cover"
          src={img.src}
          width={2000}
          height={2000}
          alt={img.alt}
        />
      </div>

      <div className="mb-4">
        <Heading3>{title}</Heading3>
        <p className="mb-2 font-semibold leading-normal text-tertiary">
          {startDate.month} {startDate.year} - {endDate.month} {endDate.year}
        </p>
        <p className="text-quaternary">{description}</p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <li
            className="rounded-lg bg-secondary px-4 py-1 text-xs text-primary"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
