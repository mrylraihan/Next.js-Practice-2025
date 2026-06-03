import { getNewsItem } from "@/lib/news"

export async function GET(req, res) {
    const slug = res.params.slug
    const newsItem = await getNewsItem(slug)
    return Response.json({message: `Hello from the news API! (${slug})`, data: newsItem})   
}