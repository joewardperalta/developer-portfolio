import Button from "./Button";

export default function SecondaryButton({
  children,
  onClick,
  className,
  ref,
}) {
  return (
    <Button
      ref={ref}
      className={`${className} border border-secondary text-secondary`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
