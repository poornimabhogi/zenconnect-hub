import Layout from "@/components/Layout";
import { Clock, Target } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="p-4 space-y-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
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
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Wishlist</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg p-4 aspect-square flex items-center justify-center">
                <p className="text-gray-500">Item {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;