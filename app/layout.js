import "./globals.css";

export const metadata = {
  title: "Joeward Peralta",
  description: "Joeward Peralta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
