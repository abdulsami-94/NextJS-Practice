export default async function Page() {
    const res = await fetch("https://fakestoreapi.com/");
    const data = await res.json();
    return <div>{data.title}</div>
}