import Button from "./Button";

export default function PrimaryButton({ children }) {
  return <Button className="border-secondary border">{children}</Button>;
}
