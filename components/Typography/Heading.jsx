export default function Heading({ children, className }) {
  return (
    <h2
      className={`${className} mb-[4.5rem] w-full text-center text-[2.625rem] font-medium uppercase leading-[1.2] text-secondary tablet:mb-[6rem] tablet:text-[4.125rem] laptop:mb-[9.375rem] laptop:text-[5.125rem] desktop:mb-[9.375rem] desktop:text-[6.125rem]`}
    >
      {children}
    </h2>
  );
}
