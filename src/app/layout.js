import "./globals.css";
import React from "react";
import ThemeProvider from "@/providers/ThemeProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
import NewNavbar from "@/components/NewNavbar/NewNavbar";
import NewFooter from "@/components/NewFooter/NewFooter";

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
                {/* <Navbar /> */}
                <NewNavbar />
                {children}
                <NewFooter />
                {/* <Footer /> */}
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
