import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const space = Space_Grotesk({ subsets: ["latin"] });
const popins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.className}>
        {" "}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
