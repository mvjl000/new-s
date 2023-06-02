import { montserrat, playfair } from "@/app/fonts";
import "@/app/globals.css";
import { Header } from "@/components/Header";

export const metadata = {
  title: "News",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className={montserrat.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow flex items-stretch pt-6">
            {/* <SideMenu /> */}
            <p>Side menu</p>
            <main className="flex-grow px-4 md:px-5 xl:px-6">{children}</main>
          </div>
          {/* <Footer /> */}
          <p>Footer</p>
        </div>
      </body>
    </html>
  );
}
