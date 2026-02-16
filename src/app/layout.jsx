import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./reduxtoolkit/provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Esha's Shop",
  description: "app about my development story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Providers>
          <Header></Header>
        <main className="text-2xl text-center">
         
             {children}
        
         
        </main>

        </Providers>
        
        
      </body>
    </html>
  );
}
