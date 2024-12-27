import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Heart, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ProductList from "@/components/marketplace/ProductList";
import CategoryList from "@/components/marketplace/CategoryList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Marketplace = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  // Load wishlist count from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      setWishlistCount(wishlistIds.length);
    }
  }, []);

  // Watch for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        const wishlistIds = JSON.parse(savedWishlist);
        setWishlistCount(wishlistIds.length);
      } else {
        setWishlistCount(0);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Categories and products mock data
  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Sports",
  ];

  const products: Product[] = [
    {
      id: "1",
      name: "Wireless Earbuds",
      price: 99.99,
      description: "High-quality wireless earbuds with noise cancellation",
      category: "Electronics",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Zen T-Shirt",
      price: 29.99,
      description: "Comfortable cotton t-shirt with zen design",
      category: "Clothing",
      image: "/placeholder.svg",
    },
    // Add more mock products as needed
  ];

  const handleWishlist = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      const items = products.filter(product => wishlistIds.includes(product.id));
      setWishlistItems(items);
    } else {
      setWishlistItems([]);
    }
    setShowWishlist(true);
  };

  const handleCart = () => {
    toast({
      title: "Coming Soon",
      description: "Cart functionality will be available soon!",
    });
  };

  const handleSell = () => {
    toast({
      title: "Coming Soon",
      description: "Sell functionality will be available soon!",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <div className="flex gap-2">
            <div className="relative inline-flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleWishlist}
                className="text-gray-600 hover:text-zenpurple"
              >
                <Heart className="h-5 w-5" />
              </Button>
              {wishlistCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs rounded-full"
                >
                  {wishlistCount}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCart}
              className="text-gray-600 hover:text-zenpurple"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button onClick={handleSell} className="bg-zenpurple hover:bg-zenpurple/90">
              <Plus className="h-5 w-5 mr-1" />
              Sell
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <ScrollArea className="w-full whitespace-nowrap">
              <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </ScrollArea>
          </CardContent>
        </Card>

        <ProductList products={products} selectedCategory={selectedCategory} />

        <Dialog open={showWishlist} onOpenChange={setShowWishlist}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>My Wishlist</DialogTitle>
            </DialogHeader>
            {wishlistItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlistItems.map((item) => (
                  <Card key={item.id} className="flex flex-col">
                    <CardContent className="p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-zenpurple font-bold mt-2">
                        ${item.price.toFixed(2)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">
                Your wishlist is empty
              </p>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Marketplace;
