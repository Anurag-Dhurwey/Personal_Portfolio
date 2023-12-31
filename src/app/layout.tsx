import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Providers } from "@/redux/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anurag",
  description: "Anurag dhurwey web-devloper portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
