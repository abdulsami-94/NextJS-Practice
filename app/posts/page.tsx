import PostCard from "./PostCard";

export default async function PostsPage() {
    const res = await fetch("https://dummyjson.com/posts")
    if (!res.ok) throw new Error("Failed to fetch posts")
    const data = await res.json();
    
    
    return(
        <ul className="grid grid-cols-1 gap-6 m-3 md:grid-cols-2">
            {data.posts.slice(0, 10).map((post: any) => (
                <PostCard key={post.id} post={post} />
            ))}
        </ul>
    )
}