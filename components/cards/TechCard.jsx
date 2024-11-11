import Image from "next/image";
import Heading3 from "../Typography/Heading3";

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
      <Heading3 className="text-center text-sm text-tertiary tablet:text-[1rem] desktop:text-base">
        {title}
      </Heading3>
    </div>
  );
}
