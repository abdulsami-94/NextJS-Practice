import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 py-4 text-white">
      <div className="flex items-center justify-between px-5">
        <h1 className="text-2xl font-bold">My Blog</h1>

        <div className="flex gap-6">
          <Link href="/" className="font-bold">
            Home
          </Link>

          <Link href="/blog" className="font-bold">
            Blog
          </Link>

          <Link href="/about" className="font-bold">
            About
          </Link>

          <Link href="/contact-us" className="font-bold">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}