export default function Container({ children }) {
  return (
    <div className="flex flex-wrap px-5 tablet:px-8">{children}</div>
  );
}
