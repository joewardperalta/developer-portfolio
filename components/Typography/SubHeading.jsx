export default function SubHeading({ className, children }) {
  return (
    <p
      className={`${className} mb-5 text-[1rem] font-medium leading-[1.2] text-secondary tablet:text-[1.125rem]`}
    >
      {children}
    </p>
  );
}
