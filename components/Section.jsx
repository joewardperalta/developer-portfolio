export default function Section({ children, id, className }) {
  return (
    <section className={`${className} py-20`} id={id}>
      {children}
    </section>
  );
}
