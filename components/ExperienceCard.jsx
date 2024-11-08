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
        <h3 className="text-secondary text-lg font-semibold leading-normal">
          {title}
        </h3>
        <p className="text-tertiary font-semibold leading-normal">
          {startDate.month} {startDate.year} - {endDate.month} {endDate.year}
        </p>
        <p className="text-quaternary font-semibold leading-normal">{role}</p>
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
