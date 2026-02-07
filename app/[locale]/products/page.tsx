import { getTranslations } from 'next-intl/server';
import { ProductCard } from "@/components/ProductCard";
import FadeIn from "@/components/FadeIn";

export default async function ProductsPage() {
    const t = await getTranslations('Navigation');

    // Mock data - in real app, fetch from DB
    const products = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="container py-10 mx-auto px-4">
            <FadeIn>
                <h1 className="text-3xl font-bold mb-8">{t('products')}</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((i) => (
                        <ProductCard
                            key={i}
                            id={i}
                            name={`Product Item ${i}`}
                            description="High quality hardware material for your home construction needs."
                            price="$99.99"
                        />
                    ))}
                </div>
            </FadeIn>
        </div>
    );
}
