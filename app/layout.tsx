import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Маулен Азикулов — Разработчик",
  description: "Личный сайт Маулена Азикулова. Разработка цифровых продуктов, систем и полезных решений.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
