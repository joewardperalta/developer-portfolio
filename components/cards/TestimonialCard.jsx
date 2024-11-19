import Image from "next/image";
import Paragraph from "../Typography/Paragraph";

export default function TestimonialCard({
  quote = "Customer review message...",
  name = "Customer Name",
  position = "Customer Position",
  organization = "Customer Organization",
  logo = {
    src: "/",
    alt: "Alt text",
  },
}) {
  return (
    <div className="w-fit tablet:px-[2.5rem] laptop:px-[7.9375rem]">
      <p className="mb-8 text-[1.125rem] font-medium tablet:text-[1.75] laptop:text-[2rem]">
        &quot;{quote}&quot;
      </p>

      <div className="flex items-center">
        <div className="max-w-[19rem] pr-4">
          <p className="text-[0.75rem] tablet:text-[1rem]">
            {name}, {position} at {organization}
          </p>
        </div>
        <div className="border-l border-l-secondary pl-4">
          <Image
            className="h-auto w-full object-cover"
            src={logo.src}
            alt={logo.alt}
            width={108}
            height={70}
          />
        </div>
      </div>
    </div>
  );
}
