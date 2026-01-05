import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function Paragraph({ children }: Props) {
  return <p className="text-base leading-[1.4] text-body">{children}</p>;
}
