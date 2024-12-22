export default async function Page({
     params 
}: {
    params: Promise<{ year: number}>
}) {
    const { year } = await params;
    return (
        <div>
            <h1>Year</h1>
            <h1>{ year }</h1>
        </div>
    )
}