import Button from "./Button";

export default function PrimaryButton({ children, onClick, className, ref }) {
  return (
    <Button
      ref={ref}
      className={`${className} border border-tertiary`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
