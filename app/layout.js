import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Joeward Peralta | Full Stack Developer",
  description: "Joeward Peralta",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${robotoFlex.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
