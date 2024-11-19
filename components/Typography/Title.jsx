export default function Title({ children }) {
  return (
    <h1 className="mb-4 text-[3.5rem] font-medium uppercase leading-[1.2] text-secondary tablet:text-[5.5rem] laptop:text-[7rem] desktop:text-[8.5rem]">
      {children}
    </h1>
  );
}
