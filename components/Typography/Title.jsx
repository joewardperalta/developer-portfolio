export default function Title({ children }) {
  return (
    <h1 className="mb-4 text-5xl font-semibold uppercase leading-[1.2] text-secondary tablet:text-[5.5rem]">
      {children}
    </h1>
  );
}
