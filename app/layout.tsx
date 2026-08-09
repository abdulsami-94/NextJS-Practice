import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  childern,
}: Readonly<{
  childern: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body>
        <nav className="flex items-center gap-6 bg-gray-900 px-6 py-4 text-white">
          <Link href="/" className="font-bold">
            Home
          </Link>
          <Link href="/blog" className="font-bold">
            Blog
          </Link>
          <Link href="/about" className="font-bold">
            About
          </Link>
          <Link href="/contactUs" className="font-bold">
            Contact Us
          </Link>
        </nav>

        <main>{childern}</main>
      </body>
    </html>
  )
}