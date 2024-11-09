export default function Heading4({ className, children }) {
  return (
    <h4
      className={`${className} text-center text-sm font-semibold leading-normal text-quaternary tablet:text-base tablet:leading-normal`}
    >
      {children}
    </h4>
  );
}
