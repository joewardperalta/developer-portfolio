import Heading3 from "../Typography/Heading3";
import Heading4 from "../Typography/Heading4";
import Image from "next/image";

export default function ExperienceCard({
  img,
  title,
  startDate,
  endDate,
  role,
  bullets,
}) {
  return (
    <div className="flex gap-5">
      <div className="max-h-14 min-h-14 min-w-14 max-w-14 overflow-hidden rounded-full bg-white">
        <Image
          className="h-full w-full object-contain"
          src={img.src}
          alt={img.alt}
          width={2000}
          height={2000}
        />
      </div>
      <div className="w-full">
        <div className="mb-2 tablet:mb-4">
          <Heading3>{title}</Heading3>
          <Heading4 className="text-start">
            {startDate.month} {startDate.year} - {endDate.month}{" "}
            {endDate.year}
          </Heading4>
          <Heading4 className="text-start">{role}</Heading4>
        </div>
        <ul className="list-disc px-5 text-quaternary tablet:space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
