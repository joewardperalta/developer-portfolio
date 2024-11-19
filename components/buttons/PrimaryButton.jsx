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
      className={`${className} bg-secondary text-primary`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
