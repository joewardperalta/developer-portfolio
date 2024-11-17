export default function Paragraph({ className, children }) {
  return (
    <p
      className={`${className} text-[1rem] leading-[1.5] text-secondary`}
    >
      {children}
    </p>
  );
}
