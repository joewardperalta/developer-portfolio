export default function Container({ children, className }) {
  return (
    <div
      className={`${className} flex flex-wrap desktop:mx-auto desktop:max-w-[1248px]`}
    >
      {children}
    </div>
  );
}
