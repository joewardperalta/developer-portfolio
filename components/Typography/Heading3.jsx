export default function Heading3({ className, children }) {
  return (
    <h3
      className={`${className} text-lg font-semibold leading-normal text-secondary tablet:text-xl tablet:leading-normal`}
    >
      {children}
    </h3>
  );
}
