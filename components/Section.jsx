export default function Section({ children, id, className }) {
  return (
    <section
      className={`${className} py-20 tablet:py-[8.125rem]`}
      id={id}
    >
      {children}
    </section>
  );
}
