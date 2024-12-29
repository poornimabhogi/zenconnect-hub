import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, Plus, ImageIcon, Video, Grid, ArrowDown, Clock, Calendar } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";
import { useSwipe } from "@/hooks/use-swipe";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfilePosts from "@/components/profile/ProfilePosts";

const Profile = () => {
  const { toast } = useToast();
  const [viewStyle, setViewStyle] = useState<"feed" | "grid">("feed");

  const { handleTouchStart, handleTouchEnd } = useSwipe({
    onSwipeDown: () => setViewStyle("feed"),
  });

  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        <ProfileHeader />
        <ProfileStats />
        <ProfilePosts 
          viewStyle={viewStyle} 
          setViewStyle={setViewStyle}
          handleTouchStart={handleTouchStart}
          handleTouchEnd={handleTouchEnd}
        />
      </div>
    </Layout>
  );
};

export default Profile;