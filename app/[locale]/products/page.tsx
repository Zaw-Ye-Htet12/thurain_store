import { ProductGrid } from "@/components/sections/ProductGrid";
import { getTranslations } from 'next-intl/server';

export default async function ProductsPage() {
    const t = await getTranslations('Navigation');

    return (
        <div className="min-h-screen bg-background">
            <ProductGrid />
        </div>
    );
}
