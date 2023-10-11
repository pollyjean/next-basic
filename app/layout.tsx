import "./Styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderNav from "./Components/HeaderNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Movie App",
    default: "Movie App",
  },
  description: "Next Movie App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
