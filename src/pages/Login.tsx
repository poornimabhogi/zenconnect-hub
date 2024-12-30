import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";

const Login = () => {
  const { loginAsGuest, isLoading } = useAuth();
  const { toast } = useToast();

  const handleGoogleLogin = () => {
    toast({
      title: "Coming Soon",
      description: "Google login will be available soon!",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-gray-600">Please sign in to continue</p>
            </div>
            <LoginForm />
          </TabsContent>

          <TabsContent value="signup">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Create Account</h1>
              <p className="text-gray-600">Sign up to get started</p>
            </div>
            <SignupForm />
          </TabsContent>
        </Tabs>

        <div className="relative">
          <Separator className="my-4" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white px-2 text-gray-500 text-sm">Or</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-4 h-4 mr-2"
          />
          Continue with Google
        </Button>

        <Separator className="my-4" />

        <Button
          variant="outline"
          className="w-full"
          onClick={loginAsGuest}
          disabled={isLoading}
        >
          Continue as Guest
        </Button>
      </Card>
    </div>
  );
};

export default Login;