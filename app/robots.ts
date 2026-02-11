import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/constant'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    }
}
