import { getTranslations } from 'next-intl/server';
import FadeIn from "@/components/FadeIn";

export default async function AboutPage() {
    const t = await getTranslations('Navigation');

    return (
        <div className="container py-16 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <FadeIn className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 tracking-tight">{t('about')} ThuRain</h1>
                <div className="prose dark:prose-invert prose-lg text-muted-foreground">
                    <p className="mb-6 leading-relaxed">
                        Welcome to ThuRain Store, your number one source for all things hardware and home decoration.
                        We're dedicated to giving you the very best of home accessories, plumbing, and appliances, with a focus on quality, customer service, and uniqueness.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        Founded in Myanmar, ThuRain Store has come a long way from its beginnings.
                        When we first started out, our passion for high-quality, reliable home improvement products
                        drove us to do intense research so that ThuRain Store can offer you the world's most advanced
                        home solutions. We now serve customers all over the country and are thrilled that we're able to
                        turn our passion into our own website.
                    </p>
                    <p className="leading-relaxed">
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                    <p className="mt-8 font-medium text-foreground">
                        Sincerely,<br />
                        The ThuRain Team
                    </p>
                </div>
            </FadeIn>
        </div>
    );
}
