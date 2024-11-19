export default function SubTitle({ children }) {
  return (
    <p className="mb-8 text-[1rem] leading-normal text-secondary tablet:mb-12 tablet:text-[1.375rem] laptop:text-[1.5rem] desktop:text-[1.75rem]">
      {children}
    </p>
  );
}
