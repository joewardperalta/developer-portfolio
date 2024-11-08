export default function Title({ children }) {
  return (
    <h1 className="tablet:text-[5.5rem] mb-4 text-5xl font-semibold uppercase leading-[1.2] text-secondary">
      {children}
    </h1>
  );
}
