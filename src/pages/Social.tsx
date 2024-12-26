import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, UserPlus, UserCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Video {
  id: string;
  url: string;
  user: {
    name: string;
    avatar: string;
    isFollowing: boolean;
  };
  description: string;
}

const Social = () => {
  const { toast } = useToast();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Mock data - in a real app, this would come from an API
  const [videos, setVideos] = useState<Video[]>([
    {
      id: "1",
      url: "https://example.com/video1.mp4",
      user: {
        name: "John Doe",
        avatar: "https://via.placeholder.com/40",
        isFollowing: false,
      },
      description: "Amazing sunset view! 🌅",
    },
    {
      id: "2",
      url: "https://example.com/video2.mp4",
      user: {
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/40",
        isFollowing: true,
      },
      description: "Dance challenge 💃",
    },
  ]);

  const handleFollow = (videoId: string) => {
    setVideos(videos.map(video => {
      if (video.id === videoId) {
        return {
          ...video,
          user: {
            ...video.user,
            isFollowing: !video.user.isFollowing
          }
        };
      }
      return video;
    }));

    toast({
      title: "Success",
      description: `You are now ${videos.find(v => v.id === videoId)?.user.isFollowing ? 'unfollowing' : 'following'} ${videos.find(v => v.id === videoId)?.user.name}`,
    });
  };

  const handleVideoClick = () => {
    setIsDarkMode(true);
  };

  const handleSwipe = (direction: 'up' | 'down') => {
    setCurrentVideoIndex(prev => {
      if (direction === 'up' && prev < videos.length - 1) return prev + 1;
      if (direction === 'down' && prev > 0) return prev - 1;
      return prev;
    });
  };

  const filteredVideos = videos.filter(video =>
    video.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentVideo = filteredVideos[currentVideoIndex];

  return (
    <Layout>
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50'}`}>
        <div className="sticky top-16 z-10 bg-white dark:bg-gray-900 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="relative h-[calc(100vh-8rem)]">
          <div
            className="h-full w-full"
            onClick={handleVideoClick}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              const startY = touch.clientY;
              
              const handleTouchEnd = (e: TouchEvent) => {
                const endY = e.changedTouches[0].clientY;
                if (endY < startY) handleSwipe('up');
                if (endY > startY) handleSwipe('down');
                document.removeEventListener('touchend', handleTouchEnd);
              };
              
              document.addEventListener('touchend', handleTouchEnd);
            }}
          >
            {currentVideo && (
              <div className="relative h-full">
                <video
                  src={currentVideo.url}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={currentVideo.user.avatar} />
                        <AvatarFallback>{currentVideo.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">{currentVideo.user.name}</p>
                        <p className="text-sm text-gray-300">{currentVideo.description}</p>
                      </div>
                    </div>
                    <Button
                      variant={currentVideo.user.isFollowing ? "secondary" : "default"}
                      size="sm"
                      onClick={() => handleFollow(currentVideo.id)}
                    >
                      {currentVideo.user.isFollowing ? (
                        <UserCheck className="w-4 h-4 mr-2" />
                      ) : (
                        <UserPlus className="w-4 h-4 mr-2" />
                      )}
                      {currentVideo.user.isFollowing ? 'Following' : 'Follow'}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Social;