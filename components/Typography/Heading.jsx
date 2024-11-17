export default function Heading({ children, className }) {
  return (
    <h2
      className={`${className} font-medium uppercase leading-[1.2] desktop:mb-[9.375rem] desktop:text-[6.125rem]`}
    >
      {children}
    </h2>
  );
}
