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
import { useState, useEffect } from "react";
import { useZenCoins } from "@/contexts/ZenCoinsContext";
import type { Product } from "@/pages/Marketplace";

interface ProductListProps {
  products: Product[];
  selectedCategory: string;
  onAddToCart: (productId: string) => void;
}

const ProductList = ({ products, selectedCategory, onAddToCart }: ProductListProps) => {
  const { toast } = useToast();
  const { addCoins, calculateCoinsFromUSD } = useZenCoins();
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory
  );

  const handleAddToWishlist = (productId: string) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        // Remove from wishlist if already added
        toast({
          title: "Removed from Wishlist",
          description: "This product has been removed from your wishlist.",
        });
        return prev.filter(id => id !== productId);
      } else {
        // Add to wishlist
        toast({
          title: "Added to Wishlist",
          description: "This product has been added to your wishlist!",
        });
        return [...prev, productId];
      }
    });
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product.id);
    // Calculate and add ZenCoins based on purchase price
    const earnedCoins = calculateCoinsFromUSD(product.price);
    addCoins(earnedCoins);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardHeader className="relative p-4">
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-2 right-2 ${
                wishlist.includes(product.id)
                  ? "text-red-500 hover:text-red-600"
                  : "text-gray-400 hover:text-red-500"
              }`}
              onClick={() => handleAddToWishlist(product.id)}
            >
              <Heart
                className={`h-5 w-5 ${
                  wishlist.includes(product.id) ? "fill-current" : ""
                }`}
              />
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
              onClick={() => handleAddToCart(product)}
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
