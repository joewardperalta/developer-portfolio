export default function Section({ children, id, className = "" }) {
  return (
    <section
      className={`${className} py-[4rem] tablet:py-[8rem] laptop:py-[12rem]`}
      id={id}
    >
      {children}
    </section>
  );
}
