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
    <div className="w-fit px-[8rem]">
      <Paragraph className="mb-8 text-[2rem] font-medium">
        &quot;{quote}&quot;
      </Paragraph>
      <div className="flex items-center">
        <div className="max-w-[19rem] pr-8">
          <Paragraph className="">
            {name}, {position} at {organization}
          </Paragraph>
        </div>
        <div className="border-l border-l-secondary pl-8">
          <Image
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
