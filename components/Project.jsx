import Image from "next/image";
import Link from "next/link";

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
      <div className="rounded-default mb-4 overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={img.src}
          width={2000}
          height={2000}
          alt={img.alt}
        />
      </div>

      <div className="mb-4">
        <h3 className="text-secondary text-lg font-semibold leading-normal">
          {title}
        </h3>
        <p className="text-tertiary mb-2 font-semibold leading-normal">
          {startDate.month} {startDate.year} - {endDate.month} {endDate.year}
        </p>
        <p className="text-quaternary">{description}</p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <li
            className="bg-secondary text-primary rounded-lg px-4 py-1 text-xs"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
