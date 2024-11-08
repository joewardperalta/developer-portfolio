export default function Heading({ children }) {
  return (
    <h2 className="tablet:text-[2rem] tablet:mb-12 mb-2.5 text-center text-2xl font-semibold uppercase leading-normal text-secondary">
      {children}
    </h2>
  );
}
