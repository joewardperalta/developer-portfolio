export default function Column({ children, className }) {
  return (
    <div className={`${className} my-4 shrink grow basis-full`}>{children}</div>
  );
}
