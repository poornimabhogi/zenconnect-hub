import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import type { Product } from "@/pages/Marketplace";

interface ProductListProps {
  products: Product[];
  selectedCategory: string;
}

const ProductList = ({ products, selectedCategory }: ProductListProps) => {
  const { toast } = useToast();

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory
  );

  const handleAddToWishlist = (productId: string) => {
    toast({
      title: "Added to Wishlist",
      description: "This product has been added to your wishlist!",
    });
  };

  const handleAddToCart = (productId: string) => {
    toast({
      title: "Added to Cart",
      description: "This product has been added to your cart!",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader className="relative p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              onClick={() => handleAddToWishlist(product.id)}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
          </CardHeader>
          <CardContent className="flex-grow">
            <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-zenpurple">
              ${product.price.toFixed(2)}
            </p>
          </CardContent>
          <CardFooter className="p-4">
            <Button
              className="w-full bg-zenpurple hover:bg-zenpurple/90"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;