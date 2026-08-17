import Link from "next/link";

export default function Home() {
  return(
    <>
      <h1 className="text-4xl font-bold flex ">This is my Next.JS App</h1>
      <Link className="text-2xl" href="/blogs">Check Out the Blogs</Link>
    </>
  );
}