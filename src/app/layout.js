"use client";

import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const isAuthPage = pathname.startsWith("/auth");

    return (
        <html lang="en">
            <body className="p-[0px] m-[0px] bg-[#98FB98] flex">
                {!isAuthPage && <Sidebar />}
                <main
                    className={`min-h-screen overflow-y-auto w-full ${
                        !isAuthPage ? "ml-[16.666666%]" : ""
                    }`}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
