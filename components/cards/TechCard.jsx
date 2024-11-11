import Image from "next/image";
import Heading4 from "../Typography/Heading4";

export default function TechCard({ title, img }) {
  return (
    <div className="w-full">
      <Image
        className="mx-auto mb-2.5 max-w-12 tablet:max-w-16"
        src={img.src}
        width={64}
        height={64}
        alt={img.alt}
      />
      <Heading4>{title}</Heading4>
    </div>
  );
}
