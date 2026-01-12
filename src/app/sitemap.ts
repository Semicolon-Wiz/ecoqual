import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.ecoqual.in"
    const urls: MetadataRoute.Sitemap = []

    function safeJson(data: any) {
        try {
            return JSON.parse(JSON.stringify(data))
        } catch {
            return null
        }
    }

    async function safeFetch(url: string) {
        try {
            const res = await fetch(url, { next: { revalidate: 86400 } })
            if (!res.ok) return null
            const text = await res.text()

            // 🚨 Protect against HTML responses
            if (text.startsWith("<")) return null

            return JSON.parse(text)
        } catch {
            return null
        }
    }

    // Static routes
    const staticPaths = [
        "/",
        "/about",
        "/ultrasound-gel",
        "/wet-wash-gloves",
        "/wet-wash-gloves/benefits",
        "/wet-wash-gloves/why-wet-wash-gloves",
        "/wet-wash-gloves/application",
        "/wet-wash-gloves/packaging-and-supply",
        "/wet-wash-gloves/contributor-nhm-nhpce-india",
        "/wet-wash-gloves/traditional-bathing-vs-wet-wash-gloves",
        "/contact",
        "/blogs",
    ]

    for (const path of staticPaths) {
        urls.push({
            url: baseUrl + path,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        })
    }

    // Fetch categories
    const menu = await safeFetch("https://inforbit.in/demo/ecoqual/api/menu")
    const categories = menu?.data || []

    for (const category of categories) {
        for (const sub of category?.sub_categories || []) {
            urls.push({
                url: `${baseUrl}/${category.slug}/${sub.slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8,
            })

            const products = await safeFetch(
                `https://inforbit.in/demo/ecoqual/api/categories/${category.slug}/${sub.slug}`
            )

            for (const item of products?.products || []) {
                urls.push({
                    url: `${baseUrl}/${category.slug}/${sub.slug}/${item.slug}`,
                    lastModified: new Date(),
                    changeFrequency: "monthly",
                    priority: 0.7,
                })
            }
        }
    }

    // Fetch blogs
    const blogs = await safeFetch("https://inforbit.in/demo/ecoqual/api/blog")

    for (const blog of blogs?.data || []) {
        urls.push({
            url: `${baseUrl}/blogs/${blog.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        })
    }

    return urls
}
