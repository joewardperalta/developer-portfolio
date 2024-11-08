export default function Button({ children, className, onClick, ref }) {
  return (
    <button
      ref={ref}
      className={`${className} tablet:text-base tablet:px-7 tablet:py-4 tablet:leading-[1.2] rounded-full px-5 py-2.5 text-sm font-semibold leading-[1.2]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
