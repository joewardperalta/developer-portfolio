export default function Button({
  children,
  className,
  onClick,
  ref,
}) {
  return (
    <button
      ref={ref}
      className={`${className} text-nowrap rounded-full px-8 py-5 text-[1rem] leading-[1.2] transition-all ease-in-out hover:scale-105 tablet:text-[1.125rem] desktop:px-9 desktop:py-6 desktop:text-[1.25rem]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
