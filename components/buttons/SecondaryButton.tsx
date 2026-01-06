import { Button } from "../ui/button";

interface Props {
  children?: React.ReactNode;
}

export default function SecondaryButton({ children }: Props) {
  return (
    <Button asChild variant="secondary">
      {children}
    </Button>
  );
}
