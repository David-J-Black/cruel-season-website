import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/component/navBar";
import appStyles from "@/appStyle";
import Header from "@/component/header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Cruel Season Website",
    description: "Cruel Season belongs to Tippi/MegaGallade",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={inter.className}
                style={appStyles.rootBody}
            >
                <Header/>
                <NavBar/>
                {children}
            </body>
        </html>
    );
}
