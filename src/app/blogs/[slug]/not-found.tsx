import Link from "next/link";

export default function NotFound() {
    return (
        <div className="p-6 max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-2">Post not found</h1>
            <p className="text-gray-600 mb-4">
            The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/blogs" className="text-blue-600 undrline">
            ← Back to all posts
            </Link>
        </div>
    )
}