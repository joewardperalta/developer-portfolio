export default function Heading({ children }) {
  return (
    <h2 className="mb-2.5 text-center text-2xl font-semibold uppercase leading-normal text-secondary tablet:mb-12 tablet:text-[2rem]">
      {children}
    </h2>
  );
}
