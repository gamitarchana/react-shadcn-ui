interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

    return (
        <div className="">
        <h1>Page: {slug}</h1>
        </div>
    )
}
