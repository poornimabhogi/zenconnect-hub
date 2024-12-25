import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Heart, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ProductList from "@/components/marketplace/ProductList";
import CategoryList from "@/components/marketplace/CategoryList";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  // Temporary mock data
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

  const handleSell = () => {
    toast({
      title: "Coming Soon",
      description: "Sell functionality will be available soon!",
    });
  };

  const handleWishlist = () => {
    toast({
      title: "Coming Soon",
      description: "Wishlist functionality will be available soon!",
    });
  };

  const handleCart = () => {
    toast({
      title: "Coming Soon",
      description: "Cart functionality will be available soon!",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleWishlist}
              className="text-gray-600 hover:text-zenpurple"
            >
              <Heart className="h-5 w-5" />
            </Button>
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
      </div>
    </Layout>
  );
};

export default Marketplace;