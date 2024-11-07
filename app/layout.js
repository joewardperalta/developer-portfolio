import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Joeward Peralta",
  description: "Joeward Peralta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className}`}>{children}</body>
    </html>
  );
}
