export default function Heading3({ className, children }) {
  return (
    <h3
      className={`${className} text-lg font-semibold leading-normal text-secondary`}
    >
      {children}
    </h3>
  );
}
