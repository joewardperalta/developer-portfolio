export default function Button({ children, className }) {
  return (
    <button className={`${className} rounded-full px-5 py-2.5 text-sm`}>
      {children}
    </button>
  );
}
