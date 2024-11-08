import Image from "next/image";

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
      <h3 className="text-quaternary text-center text-sm font-semibold leading-normal">
        {title}
      </h3>
    </div>
  );
}
