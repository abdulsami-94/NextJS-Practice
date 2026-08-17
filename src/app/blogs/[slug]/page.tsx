import { notFound } from "next/navigation";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${slug}`);

  if (!res.ok) {
    notFound();
  }

  const post: Post = await res.json();

  if (!post.id) {
    notFound();
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}