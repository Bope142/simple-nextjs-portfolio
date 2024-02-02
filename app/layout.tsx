import NavBar from "@/components/navbar/NavBar";
import type { Metadata } from "next";
import "../public/style/main.scss";
import Tabbar from "@/components/tabbar/Tabbar";
import PageTransition from "@/components/PageTransition/PageTransition";
//import { motion } from "framer-motion";
export const metadata: Metadata = {
  title: " Simple Next.js Portfolio",
  description:
    "Découvrez le portfolio simple créé avec Next.js par Norbert Yemuang Bope.",
  authors: [{ name: "Norbert Yemuang Bope" }],
  creator: "Norbert Yemuang Bope",
  publisher: "Norbert Yemuang Bope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <body>
        <main className="container">
          <NavBar></NavBar>
          {children}
          <Tabbar />
        </main>
      </body>
    </html>
  );
}
