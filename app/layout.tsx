import NavBar from "@/components/navbar/NavBar";
import type { Metadata } from "next";
import "../public/style/main.scss";

export const metadata: Metadata = {
  title: "Mon Simple Next.js Portfolio",
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
        </main>
      </body>
    </html>
  );
}
