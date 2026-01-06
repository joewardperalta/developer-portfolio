interface Props {
  children?: React.ReactNode;
}

export default function Heading({ children }: Props) {
  return (
    <h2 className="text-[2rem] text-heading leading-[1.2] font-semibold mb-8">
      {children}
    </h2>
  );
}
