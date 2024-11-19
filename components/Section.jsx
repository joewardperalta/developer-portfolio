export default function Section({ children, id, className = "" }) {
  return (
    <section
      className={`${className} py-[5.5rem] tablet:py-[8rem] laptop:py-[16rem] desktop:py-[19rem]`}
      id={id}
    >
      {children}
    </section>
  );
}
