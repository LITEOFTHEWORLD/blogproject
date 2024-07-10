import "./globals.css";
import React from "react";
import Navbar from "@/components/NAVBAR/NAVBAR";
import ThemeProvider from "@/providers/ThemeProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Footer from "@/components/FOOTER/FOOTER";

export const metadata = {
  title: "MetaBlog",
  description: "my blog",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
