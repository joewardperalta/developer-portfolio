import Image from "next/image";
import Link from "next/link";
import Heading3 from "../Typography/Heading3";
import SecondaryButton from "../buttons/SecondaryButton";

export default function ProductCard({
  image = { src: "/", alt: "" },
  status = "complete",
  role = "Role",
  company = "Company Name",
  date = {
    start: {
      month: "Jan",
      year: "2024",
    },
    end: {
      month: "Feb",
      year: "2024",
    },
  },
  description = "Product description",
  links = {
    github: "/",
    website: "/",
  },
  theme = "light",
  mirror = false,
}) {
  return (
    <div
      className={`flex items-center ${mirror && "flex-row-reverse"}`}
    >
      {/* Product Image */}
      <Image
        className="h-full w-full min-w-[656px] rounded-[2rem] object-cover"
        src={image.src}
        alt={image.alt}
        width={1000}
        height={666}
      />

      {/* Product Body */}
      <div className="w-full px-[8.3125rem]">
        {/* Status of the product, "Complete" or "Development" */}
        <StatusBar complete={status === "complete" ? true : false} />

        <div
          className={
            theme === "dark" ? "!text-primary" : "text-secondary"
          }
        >
          {/* Product title */}
          <Heading3
            className={`${theme === "dark" ? "!text-primary" : "text-secondary"} mb-2`}
          >
            {role}
          </Heading3>

          {/* Company name */}
          <p className="mb-2 text-[1.25rem] font-medium leading-[1.2]">
            {company}
          </p>

          {/* Date */}
          <div>
            <p className="mb-6 text-[1rem] font-medium leading-[1.2]">
              {date.start.month} {date.start.year} - {date.end.month}{" "}
              {date.end.year}
            </p>
          </div>

          {/* Description */}
          <p className="mb-6">{description}</p>

          {/* Link to GitHub repo */}
          <Link
            href={links.github}
            className="mb-16 flex items-center gap-2 text-[1rem] font-bold leading-[1.5]"
            target="_blank"
          >
            <Image
              className="h-8 w-8"
              src={
                theme === "dark"
                  ? "/vectors/arrow right light.svg"
                  : "/vectors/arrow right dark.svg"
              }
              alt="arrow right icon"
              width={0}
              height={0}
            />
            GitHub
          </Link>

          {/* Action to view the site */}
          <Link href={links.website} target="_blank">
            <SecondaryButton
              className={`${theme === "dark" ? "!border-primary !text-primary" : ""} border-primary`}
            >
              View The Site
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatusBar({ complete = true }) {
  const style = {
    completed: "text-[#36CE75] border-[#36CE75]",
    development: "text-[#F39C12] border-[#F39C12]",
  };

  return (
    <div
      className={`mb-2 w-fit rounded-full border px-3 py-1 text-[0.875rem] leading-[1.2] ${complete ? style.completed : style.development}`}
    >
      <p className="text-nowrap">
        {complete ? "Project Completed" : "In Development"}
      </p>
    </div>
  );
}
