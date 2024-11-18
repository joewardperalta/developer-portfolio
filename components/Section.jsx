export default function Section({ children, id, className }) {
  return (
    <section
      className={`${className} desktop:px-[6rem] desktop:py-[19.125rem]`}
      id={id}
    >
      {children}
    </section>
  );
}
