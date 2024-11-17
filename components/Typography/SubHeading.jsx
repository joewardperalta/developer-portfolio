export default function SubHeading({ className, children }) {
  return (
    <p
      className={`${className} mb-6 text-[1.25rem] font-medium leading-[1.2] text-secondary`}
    >
      {children}
    </p>
  );
}
