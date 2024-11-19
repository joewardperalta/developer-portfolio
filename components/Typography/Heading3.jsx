export default function Heading3({ className, children }) {
  return (
    <h3
      className={`${className} text-[1.5rem] font-medium leading-[1.2] text-secondary tablet:text-[2rem]`}
    >
      {children}
    </h3>
  );
}
