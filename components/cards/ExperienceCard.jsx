import Heading3 from "../Typography/Heading3";
import Heading4 from "../Typography/Heading4";

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
        <Heading4 className="text-start">
          {startDate.month} {startDate.year} - {endDate.month} {endDate.year}
        </Heading4>
        <Heading4 className="text-start">{role}</Heading4>
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
