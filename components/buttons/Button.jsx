export default function Button({
  children,
  className,
  onClick,
  ref,
}) {
  return (
    <button
      ref={ref}
      className={`${className} rounded-full px-5 py-2.5 text-sm font-semibold leading-[1.2] text-secondary transition duration-300 ease-in-out tablet:px-7 tablet:py-4 tablet:text-base tablet:leading-[1.2]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
