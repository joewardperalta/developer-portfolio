export default function Heading3({ className, children }) {
  return (
    <h3
      className={`${className} mb-[0.5rem] text-[2rem] font-medium leading-[1.2] text-secondary`}
    >
      {children}
    </h3>
  );
}
