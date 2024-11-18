export default function Heading({ children, className }) {
  return (
    <h2
      className={`${className} w-full text-center font-medium uppercase leading-[1.2] text-secondary desktop:mb-[9.375rem] desktop:text-[6.125rem]`}
    >
      {children}
    </h2>
  );
}
