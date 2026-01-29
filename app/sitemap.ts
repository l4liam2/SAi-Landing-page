import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getPosts();
    const baseUrl = 'https://sanitized.ai';

    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.metadata.date,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...blogPosts,
    ];
}
