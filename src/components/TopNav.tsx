import { User, Coins, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 py-3 px-6 flex justify-between items-center z-50">
      <Link to="/profile" className="text-gray-700">
        <User size={24} />
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/zencoins" className="flex items-center gap-1">
          <Coins size={24} className="text-zencoin" />
          <span className="font-semibold">1000</span>
        </Link>
        <Link to="/lucky-draw" className="text-gray-700">
          <Gift size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;