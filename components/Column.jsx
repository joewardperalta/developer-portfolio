export default function Column({ children, className }) {
  return (
    <div
      className={`${className} shrink grow basis-full tablet:basis-1/2`}
    >
      {children}
    </div>
  );
}
