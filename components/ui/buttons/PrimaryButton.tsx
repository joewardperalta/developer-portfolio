import { Button } from "./Button";

interface Props {
  children?: React.ReactNode;
}

export default function PrimaryButton({ children }: Props) {
  return (
    <Button asChild className="bg-primary">
      {children}
    </Button>
  );
}
