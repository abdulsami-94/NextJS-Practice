export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await fetch(`https://dummyjson.com/posts/${slug}`).then(r => r.json());

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold md-4">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}