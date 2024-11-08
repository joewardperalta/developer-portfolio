export default function Heading4({ className, children }) {
  return (
    <h4
      className={`${className} tablet:text-base text-center text-sm font-semibold leading-normal text-quaternary`}
    >
      {children}
    </h4>
  );
}
