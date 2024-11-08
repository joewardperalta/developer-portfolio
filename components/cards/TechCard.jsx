import Image from "next/image";
import Heading4 from "../Typography/Heading4";

export default function TechCard({ title, img }) {
  return (
    <div className="w-full">
      <Image
        className="mx-auto mb-2.5 h-full w-12 object-cover"
        src={img.src}
        width={2000}
        height={2000}
        alt={img.alt}
      />
      <Heading4>{title}</Heading4>
    </div>
  );
}
