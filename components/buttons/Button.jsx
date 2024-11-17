export default function Button({
  children,
  className,
  onClick,
  ref,
}) {
  return (
    <button
      ref={ref}
      className={`${className} rounded-full px-9 py-6 text-[1.25rem] leading-[1.2]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
