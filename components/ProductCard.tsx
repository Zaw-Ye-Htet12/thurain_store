import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: string;
}

export function ProductCard({ id, name, description, price }: ProductCardProps) {
    return (
        <Card className="overflow-hidden group border-muted hover:border-foreground/20 transition-colors h-full flex flex-col">
            <div className="aspect-square bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm font-medium">
                    Product Image {id}
                </div>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <CardHeader className="p-4">
                <CardTitle className="text-lg line-clamp-1">{name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p>
                <p className="font-bold text-lg">{price}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="secondary">Add to Cart</Button>
            </CardFooter>
        </Card>
    );
}
