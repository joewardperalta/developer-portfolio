export default function Button({ children, className, onClick, ref }) {
  return (
    <button
      ref={ref}
      className={`${className} rounded-full px-5 py-2.5 text-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
