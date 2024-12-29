import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Grid, ArrowDown } from "lucide-react";

interface ProfilePostsProps {
  viewStyle: "feed" | "grid";
  setViewStyle: (style: "feed" | "grid") => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchEnd: (e: React.TouchEvent) => void;
}

const ProfilePosts = ({ viewStyle, setViewStyle, handleTouchStart, handleTouchEnd }: ProfilePostsProps) => {
  const posts = []; // This would normally be populated with actual posts

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Time Capsules</h2>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewStyle("grid")}
            className={viewStyle === "grid" ? "text-primary" : ""}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewStyle("feed")}
            className={viewStyle === "feed" ? "text-primary" : ""}
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {posts.length > 0 ? (
        <ScrollArea 
          className="h-[400px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={viewStyle === "grid" ? "grid grid-cols-2 gap-4" : "space-y-4"}>
            {/* Posts would be rendered here */}
            <p className="text-gray-500 text-center py-8">No time capsules yet</p>
          </div>
        </ScrollArea>
      ) : (
        <p className="text-gray-500 text-center py-8">
          Start creating time capsules to preserve your memories
        </p>
      )}
    </Card>
  );
};

export default ProfilePosts;