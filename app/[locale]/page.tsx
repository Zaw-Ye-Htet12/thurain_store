import { getTranslations } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';
import FadeIn from "@/components/FadeIn";
import { ProductCard } from "@/components/ProductCard";
import { Hammer, Home as HomeIcon, Droplet, Zap, CheckCircle2, Truck, Headphones } from "lucide-react";

export default async function Home() {
  const t = await getTranslations('HomePage');
  const catT = await getTranslations('Categories');
  const featT = await getTranslations('Features');

  // Mock data for featured products
  const featuredProducts = [1, 2, 3, 4];

  const categories = [
    { id: 'hardware', icon: <Hammer className="h-8 w-8" />, name: catT('hardware') },
    { id: 'decor', icon: <HomeIcon className="h-8 w-8" />, name: catT('decor') },
    { id: 'plumbing', icon: <Droplet className="h-8 w-8" />, name: catT('plumbing') },
    { id: 'appliances', icon: <Zap className="h-8 w-8" />, name: catT('appliances') },
  ];

  const features = [
    { id: 'quality', icon: <CheckCircle2 className="h-10 w-10 text-primary" />, title: featT('quality'), desc: featT('qualityDesc') },
    { id: 'delivery', icon: <Truck className="h-10 w-10 text-primary" />, title: featT('delivery'), desc: featT('deliveryDesc') },
    { id: 'support', icon: <Headphones className="h-10 w-10 text-primary" />, title: featT('support'), desc: featT('supportDesc') },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center container mx-auto px-4 min-h-[70vh]">
        <FadeIn>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent drop-shadow-sm">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mb-10 leading-relaxed mx-auto">
            {t('description')}
          </p>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto justify-center">
            <Button asChild size="lg" className="rounded-full px-8 h-12 text-lg">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8 h-12 text-lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold mb-10 text-center">{t('categories')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((cat) => (
                <Link href="/products" key={cat.id} className="group">
                  <div className="bg-card hover:bg-muted/50 border rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all hover:shadow-md aspect-square">
                    <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <span className="font-semibold text-lg">{cat.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-3xl font-bold">{t('featured')}</h2>
              <Link href="/products" className="text-primary hover:underline font-medium hidden sm:block">
                {t('viewAll')} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((i) => (
                <ProductCard
                  key={i}
                  id={i}
                  name={`Featured Item ${i}`}
                  description="Premium quality product for your home."
                  price="$129.99"
                />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild className="w-full">
                <Link href="/products">{t('viewAll')}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features / Why Choose Us Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold mb-16 text-center">{t('whyChooseUs')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center text-center p-6 rounded-lg bg-background/5 border border-white/10">
                  <div className="mb-6 p-4 bg-background rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground/80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
