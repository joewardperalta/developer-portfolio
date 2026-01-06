import { Card, CardDescription, CardHeader, CardTitle } from "./card";

interface Props {
  title?: string;
  description?: string;
}

export default function SummaryCard({ title, description }: Props) {
  return (
    <Card className="h-full shadow-none">
      <CardHeader>
        <CardTitle className="text-heading">
          <h2>{title}</h2>
        </CardTitle>
        <CardDescription className="text-body">
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
