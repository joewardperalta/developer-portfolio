import Button from "./Button";

export default function PrimaryButton({
  children,
  onClick,
  className,
  ref,
}) {
  return (
    <Button
      ref={ref}
      className={`${className} bg-secondary text-primary transition-all ease-in-out hover:-translate-y-1 hover:shadow-md hover:shadow-[#B1AFAC]`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
