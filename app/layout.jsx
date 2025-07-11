import { Geist, Geist_Mono } from "next/font/google";
import Gobal from "./globals.css";

import styles from "./page.module.scss";

import NavBar from "./Components/navBar";
import Hero from "./Components/hero";
import FooterBar from "./Components/footerBar";

import { Playfair_Display } from 'next/font/google'

const playFair = Playfair_Display({
  subsets:['latin'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fuzzy Britches Fiber",
  description: "Wool farm and shop based in Stanwood, Washington",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className={styles.page + " " + playFair.className}>
            <header>
              <NavBar /> {/*Maybe make this the place where the desktop nav switches to mobile?*/}
            </header>
            {children}
            <footer className={styles.footer}>
              <FooterBar />
            </footer>
          </div>          
      </body>
    </html>
  );
}
