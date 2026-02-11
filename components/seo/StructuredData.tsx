import { BASE_URL } from "@/lib/constant";

export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HardwareStore",
        "name": "ThuRain Store",
        "image": "https://images.unsplash.com/photo-1631856954655-966f97d809de?q=80&w=1146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "@id": BASE_URL,
        "url": BASE_URL,
        "telephone": "+959769808227",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "No.20, 1st Floor, Bandarpin street, Kyimyindaing Township",
            "addressLocality": "Yangon",
            "postalCode": "11181",
            "addressCountry": "MM"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 16.8409, // Approximate Yangon coordinates, user should update
            "longitude": 96.1735
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "07:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://www.facebook.com/thurainstore",
            "https://www.instagram.com/thurainstore",
            "https://www.tiktok.com/@thurain38017"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
