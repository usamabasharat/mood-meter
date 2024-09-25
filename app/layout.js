import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mood Meter",
  description: "Track your mood every day of the year!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <header>Header</header>
          {children}
          <footer>Footer</footer>
        </body>
      </html>
    </>
  );
}
