import { getTranslations } from 'next-intl/server';
import FadeIn from "@/components/FadeIn";
import { ContactForm } from './ContactForm';

export default async function ContactPage() {
    const t = await getTranslations('Contact');

    return (
        <div className="container py-24 mx-auto px-4 max-w-2xl">
            <FadeIn>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-3">
                        {t('title')} <span className="text-muted-foreground/50">{t('subtitle')}</span>
                    </h1>
                    <p className="text-muted-foreground">{t('desc')}</p>
                </div>

                <ContactForm />

                <div className="mt-10 text-center text-sm text-muted-foreground">
                    {t('methods.email')}: <a href="mailto:thurainstoreofficial@gmail.com" className="underline hover:text-foreground transition-colors">thurainstoreofficial@gmail.com</a>
                </div>
            </FadeIn>
        </div>
    );
}
