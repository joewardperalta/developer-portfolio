import Image from "next/image";
import Link from "next/link";
import Heading3 from "./Typography/Heading3";
import Heading4 from "./Typography/Heading4";

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
    <Link
      className="inline-block transition-all duration-300 ease-in-out hover:-translate-y-4"
      href={link}
      target="_blank"
    >
      <div className="mb-4 overflow-hidden rounded-default">
        <Image
          className="h-full w-full object-cover"
          src={img.src}
          width={1440}
          height={993}
          alt={img.alt}
        />
      </div>

      <div className="mb-4">
        <Heading3>{title}</Heading3>
        <Heading4 className="mb-2 text-start">
          {startDate.month} {startDate.year} - {endDate.month}{" "}
          {endDate.year}
        </Heading4>
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
