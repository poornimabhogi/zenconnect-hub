import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, Plus, Image as ImageIcon, Video, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";

const Profile = () => {
  const { toast } = useToast();
  const [stories, setStories] = useState<{ id: number; type: "image" | "video"; url: string; timestamp: Date }[]>([]);

  const handleStoryUpload = () => {
    // Simulating story upload - in real app, this would handle file upload
    const newStory = {
      id: stories.length + 1,
      type: "image",
      url: "/placeholder.svg",
      timestamp: new Date(),
    };
    setStories([newStory, ...stories]);
    toast({
      title: "Story uploaded",
      description: "Your story will be visible for 24 hours",
    });
  };

  const handleFollow = () => {
    toast({
      title: "Success",
      description: "You are now following this user",
    });
  };

  // Filter stories less than 24 hours old
  const activeStories = stories.filter(
    (story) => new Date().getTime() - story.timestamp.getTime() < 24 * 60 * 60 * 1000
  );

  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Username</h1>
              <p className="text-muted-foreground">Bio goes here</p>
            </div>
          </div>
          <Button onClick={handleFollow} className="gap-2">
            <UserPlus className="h-4 w-4" />
            Follow
          </Button>
        </div>

        {/* Stories Section */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Stories</h2>
            <Button size="icon" variant="ghost" onClick={handleStoryUpload}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="w-full">
            <div className="flex gap-4 pb-4">
              {activeStories.map((story) => (
                <div
                  key={story.id}
                  className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary p-0.5"
                >
                  <img
                    src={story.url}
                    alt="Story"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Post Creation Card */}
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <Input
                placeholder="What's on your mind?"
                className="bg-muted"
                onClick={() => {
                  toast({
                    title: "Create Post",
                    description: "Post creation will be implemented soon",
                  });
                }}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm">
                <ImageIcon className="h-4 w-4 mr-2" />
                Photo
              </Button>
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4 mr-2" />
                Video
              </Button>
            </div>
          </div>
        </Card>

        {/* Posts Section Placeholder */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Posts</h2>
          <Card className="p-4">
            <p className="text-muted-foreground text-center py-8">
              No posts yet
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;