import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ThemeContextProvider from "@/context/ThemeContext";
import ThemProvider from "@/providers/ThemProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Amin Portfolio",
  description: "Amin Chogueur, A front end web developer (React/Next)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeContextProvider>
          <ThemProvider>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </ThemProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
