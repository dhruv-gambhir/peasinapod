import "../styles/globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Peas in a Pod",
  description: "By Dhruv Gambhir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-[0px] m-[0px] bg-[#98FB98]">
        <Sidebar />
        <main className="ml-[16.666666%] w-5/6 min-h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
