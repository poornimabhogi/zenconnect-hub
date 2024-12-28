import { User, Coins, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const TopNav = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 py-3 px-6 flex justify-between items-center z-50">
      {user ? (
        <Link to="/profile" className="text-gray-700">
          <User size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <Button variant="ghost" size="sm">
            Login
          </Button>
        </Link>
      )}
      <div className="flex items-center gap-4">
        <Link to="/zencoins" className="flex items-center gap-1">
          <Coins size={24} className="text-zencoin" />
          <span className="font-semibold">1000</span>
        </Link>
        <Link to="/lucky-draw" className="text-gray-700">
          <Gift size={24} />
        </Link>
        {user && (
          <Button variant="ghost" size="sm" onClick={logout}>
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default TopNav;