import { Card } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

const ProfileStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3">
          <Clock className="text-zenpurple h-5 w-5" />
          <div>
            <p className="text-sm text-gray-600">Time Capsules</p>
            <p className="font-semibold">156</p>
          </div>
        </div>
      </Card>
      <Card className="p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3">
          <Calendar className="text-zenpurple h-5 w-5" />
          <div>
            <p className="text-sm text-gray-600">Days Active</p>
            <p className="font-semibold">365</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileStats;