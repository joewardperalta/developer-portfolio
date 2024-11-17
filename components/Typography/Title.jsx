export default function Title({ children }) {
  return (
    <h1 className="mb-4 font-medium uppercase leading-[1.2] text-secondary desktop:text-[8.5rem]">
      {children}
    </h1>
  );
}
