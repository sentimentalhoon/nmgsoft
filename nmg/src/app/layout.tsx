import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NMyeongGa Soft | 앤명가소프트",
  description: "Premium Software & Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div id="app-root">
          {children}
        </div>
      </body>
    </html>
  );
}
