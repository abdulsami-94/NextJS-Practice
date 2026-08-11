'use client'
import { useState } from "react";

export default function PostCard({ post }: { post: any }) {
  const [likes, setLikes] = useState<Record<number, number>>({});

  const handleLike = (id: number) => {
    setLikes(prev => ({ ...prev, [id]: (prev[id] ?? 0) + 1}));
  };
  const [count, setCount] = useState(0);

  return (
    <li className="border rounded px-2 py-4">
      {post.id} <br />
      {post.title} <br />
      {post.body} <br />
      <button
        className="border rounded px-2 py-1"
        onClick={() => handleLike(post.id)}
      >
        ❤️ {likes[post.id] ?? 0}
      </button>
    </li>
  );
}