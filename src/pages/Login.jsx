import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Label from "../components/UI/Label";
import { Mic } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0B0B10] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#B03052] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#D76C82] rounded-full blur-[180px] opacity-15 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center shadow-lg shadow-[rgba(176,48,82,0.3)]">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-[#F5F5F7]">VocalFlow</span>
        </div>

        <Card className="bg-[#12121A]/80 backdrop-blur-xl border-[rgba(176,48,82,0.2)] p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#F5F5F7] mb-2">Welcome back</h1>
            <p className="text-[#9CA3AF]">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#F5F5F7]">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-[#1A1A24] border-[rgba(176,48,82,0.2)] text-[#F5F5F7] placeholder:text-[#9CA3AF] focus:border-[#B03052]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#F5F5F7]">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-[#1A1A24] border-[rgba(176,48,82,0.2)] text-[#F5F5F7] placeholder:text-[#9CA3AF] focus:border-[#B03052]"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#9CA3AF] cursor-pointer">
                <input type="checkbox" className="rounded border-[rgba(176,48,82,0.2)]" />
                Remember me
              </label>
              <a href="#forgot" className="text-[#B03052] hover:text-[#D76C82] transition-colors">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-br from-[#B03052] to-[#D76C82] hover:opacity-90 text-white rounded-lg transition-all duration-200 shadow-lg shadow-[rgba(176,48,82,0.3)]"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-[#9CA3AF]">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#B03052] hover:text-[#D76C82] transition-colors font-medium">
              Sign up
            </Link>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-[#9CA3AF] hover:text-[#F5F5F7] transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
