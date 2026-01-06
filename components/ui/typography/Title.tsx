import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function Title({ children }: Props) {
  return (
    <h1 className="text-[2.5rem] text-heading leading-[1.2] font-bold mb-4">
      {children}
    </h1>
  );
}
