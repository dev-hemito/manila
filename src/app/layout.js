import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manila Rent a Car",
  description: "Get your luxurious ride with Manila Rent a Car, offering high-end vehicles for all your travel needs.",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Manila Rent a Car",
    description: "Get your luxurious ride with Manila Rent a Car, offering high-end vehicles for all your travel needs.",
    url: "https://manilarentcars.com",  // Update this with your actual website URL
    type: "website",
    site_name: "Manila Rent a Car",
    images: [
      {
        url: "https://manilarentcars.com/logo.png",  // Update with the URL of your Open Graph image
        width: 1200,
        height: 630,
        alt: "Manila Rent a Car",
      },
    ],
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Manila Rent a Car" />
        <meta name="keywords" content="Rent a Car, Manila, Luxury Car, Car Hire, Travel, Rent Luxury Cars" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content={metadata.viewport} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        
        
        <title>{metadata.title}</title>
      </head>
      <body className={`${montserrat.variable} bg-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
