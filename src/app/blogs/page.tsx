import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsResponse {
  posts: Post[];
}

export default async function BlogsPoge() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data: PostsResponse = await res.json();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <div className="space-y-4">
        {data.posts.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="block p-4 border rounded-lg ">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 line-clamp-2 mt-1">{post.body}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}