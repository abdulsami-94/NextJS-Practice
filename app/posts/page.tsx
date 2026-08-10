export default async function PostsPage() {
    const res = await fetch("https://dummyjson.com/posts")
    const posts = await res.json();
    
    return(
        <>
            <ul className="grid grid-cols-1 gap-6 m-3 md:grid-cols-2">
                {posts.posts.slice(0, 10).map((post: any) => (
                    <li className="border rounded px-2 py-4"
                        key={post.id}>
                        {post.id} <br/>
                        {post.title} <br/>
                        {post.body} <br/>
                        <button className="border rounded px-2 py-1">❤️</button>
                    </li>
                ))}
                
            </ul>
        </>
    )
}