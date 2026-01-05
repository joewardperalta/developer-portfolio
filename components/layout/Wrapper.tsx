import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Wrapper({ children }: Props) {
  return <div className="max-w-200 px-6 mx-auto">{children}</div>;
}
