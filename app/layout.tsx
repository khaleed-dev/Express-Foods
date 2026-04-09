import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


/* Root layout is intentionally minimal.
   Each route group provides its own html/body:
   - (site) routes: site layout with Navbar/Footer
   - (payload) routes: Payload admin with its own RootLayout */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
