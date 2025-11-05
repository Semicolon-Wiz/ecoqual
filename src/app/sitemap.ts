import { MetadataRoute } from 'next';

interface SubCategory {
    id: number;
    title: string;
    slug: string;
    category_id: number;
    image: string;
}

interface Category {
    id: number;
    title: string;
    slug: string;
    category_heading: string;
    description: string;
    image: string;
    sub_categories: SubCategory[];
}

interface Blog {
    id: number;
    title: string;
    slug: string;
    blog_image: string;
    bog_description: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.ecoqual.in';

    const categoryRes = await fetch('https://inforbit.in/demo/ecoqual/api/menu', {
        next: { revalidate: 86400 },
    });

    const blogs = await fetch('https://inforbit.in/demo/ecoqual/api/blog', {
        next: { revalidate: 86400 },
    });

    const categoryData = await categoryRes.json();
    const categories: Category[] = categoryData?.data || [];

    const blogData = await blogs.json();
    const allBlogs: Blog[] = blogData?.data || []

    const urls: MetadataRoute.Sitemap = [];

    const staticRoutes: MetadataRoute.Sitemap = [
        '/',
        '/about',
        '/ultrasound-gel',
        '/wet-wash-gloves',
        '/wet-wash-gloves/benefits',
        '/wet-wash-gloves/why-wet-wash-gloves',
        '/wet-wash-gloves/application',
        '/wet-wash-gloves/packaging-and-supply',
        '/wet-wash-gloves/contributor-nhm-nhpce-india',
        '/wet-wash-gloves/traditional-bathing-vs-wet-wash-gloves',
        '/contact',
        '/blog',
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
    }));

    urls.push(...staticRoutes);

    for (const category of categories) {

        if (category.sub_categories && category.sub_categories.length > 0) {

            for (const sub of category.sub_categories) {
                urls.push({
                    url: `${baseUrl}/${category.slug}/${sub.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'weekly',
                    priority: 0.8,
                });

                try {
                    const productRes = await fetch(
                        `https://inforbit.in/demo/ecoqual/api/categories/${category.slug}/${sub.slug}`,
                        { next: { revalidate: 86400 } }
                    );
                    const productData = await productRes.json();
                    const products = await productData?.products || [];

                    for (const item of products) {
                        urls.push({
                            url: `${baseUrl}/${category.slug}/${sub.slug}/${item.slug}`,
                            lastModified: new Date(),
                            changeFrequency: 'monthly',
                            priority: 0.7,
                        });
                    }
                } catch (err) {
                    console.error(`❌ Error fetching products for ${sub.slug}:`, err);
                }
            }
        }
    }
    for (const blogs of allBlogs) {
        urls.push({
            url: `${baseUrl}/blogs/${blogs.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        });
    }

    return urls;
}
