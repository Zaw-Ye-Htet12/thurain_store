import { getTranslations } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FadeIn from "@/components/FadeIn";

export default async function ContactPage() {
    const t = await getTranslations('Navigation');

    return (
        <div className="container py-16 mx-auto px-4 max-w-xl">
            <FadeIn>
                <h1 className="text-3xl font-bold mb-8 text-center">{t('contact')} Us</h1>
                <div className="bg-card border rounded-xl p-8 shadow-sm">
                    <form className="space-y-6">
                        <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="name@example.com"
                                className="bg-background"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea
                                id="message"
                                placeholder="How can we help you today?"
                                rows={5}
                                className="bg-background resize-none"
                            />
                        </div>
                        <Button size="lg" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    Or email us directly at <a href="mailto:thurainstoreofficial@gmail.com" className="underline hover:text-foreground">thurainstoreofficial@gmail.com</a>
                </div>
            </FadeIn>
        </div>
    );
}
