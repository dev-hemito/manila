import {  Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Manila Rent a Car",
  description: "Get your luxurious ride",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} bg-gray-950`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
