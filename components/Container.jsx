export default function Container({ children, className }) {
  return (
    <div
      className={`${className} flex flex-wrap px-5 tablet:px-8 desktop:px-24`}
    >
      {children}
    </div>
  );
}
