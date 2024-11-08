export default function ExperienceCard({ title, startDate, endDate, bullets }) {
  return (
    <div>
      <div>
        <h3 className="text-secondary text-lg font-semibold leading-normal">
          {title}
        </h3>
        <p className="text-tertiary mb-2 font-semibold leading-normal">
          {startDate.month} {startDate.year} - {endDate.month} {endDate.year}
        </p>
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
