import Layout from "@/components/Layout";
import { Clock, Target, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-3">Daily Activity</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="text-zenpurple" />
                <div>
                  <p className="text-sm text-gray-600">Screen Time</p>
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

          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-3">Connections</h2>
            <div className="flex items-center gap-2">
              <Users className="text-zenpurple" />
              <div>
                <p className="text-sm text-gray-600">Total Connections</p>
                <p className="font-semibold">24</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Wishlist</h2>
            <Heart className="text-zenpurple" />
          </div>
          {wishlistItems.length > 0 ? (
            <ScrollArea className="h-[300px]">
              <div className="grid grid-cols-2 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-4">
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
              Your wishlist is empty
            </p>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default Index;