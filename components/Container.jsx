export default function Container({ children, className = "" }) {
  return (
    <div
      className={`${className} container flex flex-wrap px-4 tablet:px-10 laptop:px-12 desktop:mx-auto desktop:max-w-[1440px] desktop:px-12`}
    >
      {children}
    </div>
  );
}
