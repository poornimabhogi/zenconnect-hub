import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, Plus, Image as ImageIcon, Video, Grid, ArrowDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";
import { useSwipe } from "@/hooks/use-swipe";

interface Post {
  id: number;
  type: "text" | "image" | "video";
  content: string;
  timestamp: Date;
}

const Profile = () => {
  const { toast } = useToast();
  const [stories, setStories] = useState<{ id: number; type: "video" | "image"; url: string; timestamp: Date }[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [viewStyle, setViewStyle] = useState<"feed" | "grid">("feed");
  const [newPost, setNewPost] = useState("");

  const handleStoryUpload = () => {
    const newStory = {
      id: stories.length + 1,
      type: "image" as const,
      url: "https://via.placeholder.com/150",
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

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        type: "text" as const,
        content: newPost,
        timestamp: new Date(),
      };
      setPosts([post, ...posts]);
      setNewPost("");
      toast({
        title: "Post created",
        description: "Your post has been published successfully",
      });
    }
  };

  const { handleTouchStart, handleTouchEnd } = useSwipe({
    onSwipeDown: () => setViewStyle("feed"),
  });

  const activeStories = stories.filter(
    (story) => new Date().getTime() - story.timestamp.getTime() < 24 * 60 * 60 * 1000
  );

  const renderPosts = () => {
    if (posts.length === 0) {
      return (
        <Card className="p-4">
          <p className="text-muted-foreground text-center py-8">
            No posts yet
          </p>
        </Card>
      );
    }

    if (viewStyle === "grid") {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-square bg-muted flex items-center justify-center">
                {post.type === "text" ? (
                  <p className="p-4 text-sm line-clamp-4">{post.content}</p>
                ) : (
                  <img src="https://via.placeholder.com/300" alt="Post content" className="w-full h-full object-cover" />
                )}
              </div>
            </Card>
          ))}
        </div>
      );
    }

    return (
      <div className="space-y-4" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {posts.map((post) => (
          <Card key={post.id} className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://via.placeholder.com/32" alt="Profile" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Username</p>
                <p className="text-muted-foreground">
                  {new Date(post.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-sm">{post.content}</p>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://via.placeholder.com/80" alt="Profile" />
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

        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" alt="Profile" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <Input
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="bg-muted"
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
              <Button variant="default" size="sm" onClick={handlePostSubmit}>
                Post
              </Button>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Posts</h2>
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
          {renderPosts()}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
