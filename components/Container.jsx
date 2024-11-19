export default function Container({ children, className = "" }) {
  return (
    <div
      className={`${className} container flex flex-wrap desktop:mx-auto desktop:max-w-[1440px] desktop:px-12`}
    >
      {children}
    </div>
  );
}
