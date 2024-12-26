import Layout from "@/components/Layout";
import { Trophy, Target, Medal, HeartPulse } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const Health = () => {
  const { toast } = useToast();
  const [steps, setSteps] = useState(0);
  const [dailyGoal] = useState(10000);
  const [weeklyGoal] = useState(70000);
  const [weeklySteps, setWeeklySteps] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  // Simulated pedometer using device motion
  useEffect(() => {
    let stepCounter = 0;
    let lastAccel = 0;
    const threshold = 10; // Sensitivity threshold

    const handleMotion = (event: DeviceMotionEvent) => {
      if (!isTracking || !event.acceleration) return;

      const accel = Math.sqrt(
        (event.acceleration.x || 0) ** 2 +
        (event.acceleration.y || 0) ** 2 +
        (event.acceleration.z || 0) ** 2
      );

      if (Math.abs(accel - lastAccel) > threshold) {
        stepCounter++;
        setSteps(prev => {
          const newSteps = prev + 1;
          // Check if daily goal is reached
          if (newSteps === dailyGoal) {
            toast({
              title: "Daily Goal Achieved! 🎉",
              description: "You've earned 100 Zen Coins!",
            });
          }
          return newSteps;
        });
        setWeeklySteps(prev => prev + 1);
      }
      lastAccel = accel;
    };

    if (isTracking) {
      if (typeof DeviceMotionEvent !== 'undefined') {
        window.addEventListener('devicemotion', handleMotion);
      } else {
        console.log('Device motion not supported');
        toast({
          title: "Device Not Supported",
          description: "Pedometer requires motion sensors.",
          variant: "destructive",
        });
      }
    }

    return () => {
      if (typeof DeviceMotionEvent !== 'undefined') {
        window.removeEventListener('devicemotion', handleMotion);
      }
    };
  }, [isTracking, toast, dailyGoal]);

  const challenges = [
    {
      title: "Daily Steps Challenge",
      icon: <Trophy className="text-yellow-500" />,
      progress: (steps / dailyGoal) * 100,
      current: steps,
      target: dailyGoal,
      reward: "100 Zen Coins",
    },
    {
      title: "Weekly Marathon",
      icon: <Target className="text-blue-500" />,
      progress: (weeklySteps / weeklyGoal) * 100,
      current: weeklySteps,
      target: weeklyGoal,
      reward: "500 Zen Coins",
    },
  ];

  const toggleTracking = () => {
    setIsTracking(!isTracking);
    toast({
      title: !isTracking ? "Step Tracking Started" : "Step Tracking Paused",
      description: !isTracking ? "Your steps are now being counted" : "Step counting paused",
    });
  };

  return (
    <Layout>
      <div className="p-4 space-y-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <HeartPulse className="text-red-500" />
              Fitness Challenges
            </h2>
            <Button
              onClick={toggleTracking}
              variant={isTracking ? "destructive" : "default"}
            >
              {isTracking ? "Stop Tracking" : "Start Tracking"}
            </Button>
          </div>

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {challenge.icon}
                    <h3 className="font-semibold">{challenge.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Medal className="text-purple-500" />
                    <span className="text-sm text-gray-600">{challenge.reward}</span>
                  </div>
                </div>
                <Progress value={challenge.progress} className="mb-2" />
                <div className="text-sm text-gray-600">
                  {challenge.current.toLocaleString()} / {challenge.target.toLocaleString()} steps
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-4">Tips for Success</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Take the stairs instead of the elevator</li>
            <li>Walk during phone calls</li>
            <li>Park farther from entrances</li>
            <li>Take short walks during breaks</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Health;