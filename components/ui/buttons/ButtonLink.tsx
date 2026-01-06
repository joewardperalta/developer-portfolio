import { Button } from "./Button";

interface Props {
  children?: React.ReactNode;
}

export default function ButtonLink({ children }: Props) {
  return (
    <Button variant="link" asChild className="text-base text-heading">
      {children}
    </Button>
  );
}
