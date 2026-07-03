import "./globals.css";
import CursorWrapper from "@/components/CursorWrapper";

export const metadata = {
  title: "Mahira Khan — Full-Stack Developer",
  description:
    "Portfolio of Mahira Khan, full-stack developer building real-time, full-stack web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorWrapper />
        {children}
      </body>
    </html>
  );
}
