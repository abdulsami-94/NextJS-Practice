'use client'
import { useState } from "react";

export default function PostCard({ post }: { post: any }) {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

    return(
        <li className="border rounded px-2 py-4">
            {post.id} <br />
            {post.title} <br />
            {post.body} <br />
            <button
                className="border rounded px-2 py-1"
                onClick={() => setLiked(!liked)}
        >
            {liked ? "❤️" : "🤍"}
        </button>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        </li>
    )
}