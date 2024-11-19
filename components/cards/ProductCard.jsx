import Image from "next/image";
import Link from "next/link";
import Heading3 from "../Typography/Heading3";
import SecondaryButton from "../buttons/SecondaryButton";
import Paragraph from "../Typography/Paragraph";

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
      className={`flex flex-col items-center ${mirror ? "laptop:flex-row-reverse" : "laptop:flex-row"}`}
    >
      {/* Product Image */}
      <Image
        className="h-auto rounded-[1.125rem] laptop:w-[5000px] laptop:max-w-[680px]"
        src={image.src}
        alt={image.alt}
        width={1000}
        height={666}
      />

      {/* Product Body */}
      <div className="mt-6 w-full laptop:mt-0 laptop:px-[5.75rem] desktop:px-[7.25rem]">
        <div className="flex flex-col justify-between tablet:flex-row-reverse laptop:flex-col">
          {/* Status of the product, "complete" or "development" */}
          <StatusBar
            complete={status === "complete" ? true : false}
          />

          {/* Product title */}
          <Heading3
            className={`${theme === "dark" ? "!text-primary" : "text-secondary"}`}
          >
            {role}
          </Heading3>
        </div>

        <div
          className={
            theme === "dark" ? "!text-primary" : "text-secondary"
          }
        >
          <div className="flex flex-col justify-between tablet:flex-row laptop:flex-col">
            {/* Company name */}
            <Paragraph className="text-[1.25rem] font-medium leading-[1.2] !text-inherit">
              {company}
            </Paragraph>

            {/* Date */}
            <Paragraph className="mb-6 text-[1rem] font-medium leading-[1.2] !text-inherit">
              {date.start.month} {date.start.year} - {date.end.month}{" "}
              {date.end.year}
            </Paragraph>
          </div>

          {/* Description */}
          <p
            className={`mb-10 ${theme === "dark" ? "text-lightGray" : "text-gray"}`}
          >
            {description}
          </p>

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
      className={`mb-2 w-fit rounded-full border px-4 py-2 text-[0.75rem] leading-[1.2] ${complete ? style.completed : style.development}`}
    >
      <p className="text-nowrap">
        {complete ? "Project Completed" : "In Development"}
      </p>
    </div>
  );
}
