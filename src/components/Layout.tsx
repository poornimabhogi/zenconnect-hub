import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <main className="pt-16 pb-20 min-h-screen">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;