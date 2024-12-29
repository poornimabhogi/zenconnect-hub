import Layout from "@/components/Layout";
import { Clock, Target, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);

  // Load wishlist items from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      // Mock data - in a real app, you would fetch the actual product data
      const mockProducts = [
        {
          id: "1",
          name: "Wireless Earbuds",
          price: 99.99,
          image: "/placeholder.svg"
        },
        {
          id: "2",
          name: "Zen T-Shirt",
          price: 29.99,
          image: "/placeholder.svg"
        }
      ];
      const filteredProducts = mockProducts.filter(product => 
        wishlistIds.includes(product.id)
      );
      setWishlistItems(filteredProducts);
    }
  }, []);

  return (
    <Layout>
      <div className="p-4 space-y-6">
        {/* Hero Section */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-zenpurple mb-4">TimeCapsule</h1>
          <p className="text-lg text-gray-600 mb-6">Preserve your moments, connect with others, and build your digital legacy</p>
          <Button className="bg-zenpurple hover:bg-zenpurple/90">Get Started</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold mb-3">Daily Activity</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="text-zenpurple" />
                <div>
                  <p className="text-sm text-gray-600">Time Captured</p>
                  <p className="font-semibold">2h 15m</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Target className="text-zenpurple" />
                <div>
                  <p className="text-sm text-gray-600">Daily Goal</p>
                  <p className="font-semibold">4h</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold mb-3">Time Travelers</h2>
            <div className="flex items-center gap-2">
              <Users className="text-zenpurple" />
              <div>
                <p className="text-sm text-gray-600">Connected Travelers</p>
                <p className="font-semibold">24</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Captured Moments</h2>
            <Heart className="text-zenpurple" />
          </div>
          {wishlistItems.length > 0 ? (
            <ScrollArea className="h-[300px]">
              <div className="grid grid-cols-2 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-zenpurple font-semibold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <p className="text-gray-500 text-center py-8">
              Start capturing moments to build your collection
            </p>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default Index;