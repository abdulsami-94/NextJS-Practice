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
      <span className="border border-neutral-800 rounded-xl p-5 bg-neutral-900 hover:bg-neutral-800/80 transition-colors flex flex-col gap-3">{post.id}</span> <br />
      <span className="text-xs font-mono text-neutral-500">#{post.id}</span>
      <span className="text-lg font-semibold text-neutral-100 line-clamp-2">{post.title}</span> <br />
      <span className="text-sm text-neutral-400 line-clamp-3">{post.body}</span> <br />
      <button
        className="flex items-center gap-1 text-sm text-neutral-400 hover:text-red-400 transition-colors"
        onClick={() => handleLike(post.id)}
      >
        ❤️ {likes[post.id] ?? 0}
      </button>
    </li>
  );
}