import Heading3 from "../Typography/Heading3";

export default function ExperienceCard({
  title,
  startDate,
  endDate,
  role,
  bullets,
}) {
  return (
    <div>
      <div className="mb-2">
        <Heading3>{title}</Heading3>
        <p className="font-semibold leading-normal text-tertiary">
          {startDate.month} {startDate.year} - {endDate.month} {endDate.year}
        </p>
        <p className="font-semibold leading-normal text-quaternary">{role}</p>
      </div>
      <ul className="list-disc px-5">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-quaternary">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
