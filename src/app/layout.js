import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Peas in a Pod",
  description: "By Dhruv Gambhir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-cols-[1fr_5fr] h-screen">
        <Sidebar />
        <div className="bg-[#98FB98]">
          {children}
        </div>
      </body>
    </html>
  );
}
