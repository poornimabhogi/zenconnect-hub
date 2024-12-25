import { Home, ShoppingBag, Play, Gamepad2, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-center z-50">
      <Link to="/" className={`flex flex-col items-center ${isActive("/") ? "text-zenpurple" : "text-gray-500"}`}>
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link to="/marketplace" className={`flex flex-col items-center ${isActive("/marketplace") ? "text-zenpurple" : "text-gray-500"}`}>
        <ShoppingBag size={24} />
        <span className="text-xs mt-1">Market</span>
      </Link>
      <Link to="/social" className={`flex flex-col items-center ${isActive("/social") ? "text-zenpurple" : "text-gray-500"}`}>
        <Play size={24} />
        <span className="text-xs mt-1">Social</span>
      </Link>
      <Link to="/games" className={`flex flex-col items-center ${isActive("/games") ? "text-zenpurple" : "text-gray-500"}`}>
        <Gamepad2 size={24} />
        <span className="text-xs mt-1">Games</span>
      </Link>
      <Link to="/health" className={`flex flex-col items-center ${isActive("/health") ? "text-zenpurple" : "text-gray-500"}`}>
        <Heart size={24} />
        <span className="text-xs mt-1">Health</span>
      </Link>
    </nav>
  );
};

export default BottomNav;