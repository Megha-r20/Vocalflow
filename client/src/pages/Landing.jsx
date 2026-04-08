import React from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Zap, ArrowRight, CheckCircle2, Sparkles, Brain, FileOutput, Code2, Headphones, Users, Building2, Rocket, Workflow, Gauge, Plug, Upload, Play, FileText, User } from "lucide-react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0B10] text-[#F5F5F7] overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#B03052] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#D76C82] rounded-full blur-[180px] opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#B03052] rounded-full blur-[200px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-[#12121A] border border-[rgba(176,48,82,0.2)] px-4 py-2 rounded-full mb-8 backdrop-blur-sm hover:border-[rgba(176,48,82,0.4)] transition-all duration-300 shadow-lg shadow-[rgba(176,48,82,0.1)]">
          <Sparkles className="w-4 h-4 text-[#D76C82] animate-pulse" />
          <span className="text-sm text-[#9CA3AF]">AI-Powered Voice Workflows</span>
        </div>

        <h1 className="text-7xl font-bold mb-8 leading-tight tracking-tight">
          Build AI Voice Workflows
          <br />
          <span className="bg-gradient-to-r from-[#B03052] via-[#D76C82] to-[#B03052] bg-clip-text text-transparent animate-pulse">
            Visually
          </span>
        </h1>

        <p className="text-2xl text-[#9CA3AF] mb-12 max-w-3xl mx-auto leading-relaxed">
          Design, connect, and deploy intelligent voice pipelines with our no-code visual builder.
          <br />
          <span className="text-[#F5F5F7]/80">Just drag, drop, and ship.</span>
        </p>

        <div className="flex flex-wrap items-center gap-4 justify-center mb-20">
          <Button
            onClick={() => navigate('/app')}
            size="lg"
            className="bg-gradient-to-r from-[#B03052] to-[#D76C82] hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.5)] text-white px-10 py-7 rounded-xl transition-all duration-300 text-lg group hover:scale-105 font-semibold"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[rgba(176,48,82,0.3)] bg-[#12121A]/80 hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.5)] text-[#F5F5F7] px-10 py-7 rounded-xl backdrop-blur-sm text-lg transition-all duration-300 hover:scale-105 font-semibold"
          >
            View Demo
          </Button>
        </div>

        {/* Product Preview */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-[#B03052]/30 to-transparent rounded-3xl blur-3xl"></div>
          <div className="relative bg-[#12121A]/50 backdrop-blur-xl border border-[rgba(176,48,82,0.2)] rounded-3xl p-8 shadow-2xl overflow-hidden hover:border-[rgba(176,48,82,0.4)] transition-all duration-500">
            <div className="aspect-video bg-gradient-to-br from-[#1A1A24] to-[#12121A] rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Enhanced Blurred Workflow Preview */}
              <div className="absolute inset-0 flex items-center justify-center gap-12 blur-md opacity-50">
                <div className="w-48 h-48 bg-gradient-to-br from-[#B03052]/40 to-[#D76C82]/20 rounded-3xl animate-pulse"></div>
                <div className="w-48 h-48 bg-gradient-to-br from-[#D76C82]/40 to-[#B03052]/20 rounded-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-48 h-48 bg-gradient-to-br from-[#B03052]/40 to-[#D76C82]/20 rounded-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="relative z-10 text-[#9CA3AF] text-xl font-medium">
                Visual Workflow Builder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            How It <span className="bg-gradient-to-r from-[#B03052] to-[#D76C82] bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Three simple steps to build powerful AI voice workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#B03052]/30 to-transparent"></div>
          </div>

          {/* Step 1 */}
          <div className="relative group">
            <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-10 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[rgba(176,48,82,0.4)] group-hover:shadow-2xl group-hover:shadow-[rgba(176,48,82,0.6)] transition-all duration-500 group-hover:scale-110 mx-auto">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B03052] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-[rgba(176,48,82,0.5)]">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Voice Input</h3>
                <p className="text-[#9CA3AF] text-center leading-relaxed">
                  Connect your audio source or microphone. Support for real-time streaming and file uploads.
                </p>
              </div>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-10 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[rgba(176,48,82,0.4)] group-hover:shadow-2xl group-hover:shadow-[rgba(176,48,82,0.6)] transition-all duration-500 group-hover:scale-110 mx-auto">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D76C82] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-[rgba(215,108,130,0.5)]">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">AI Processing</h3>
                <p className="text-[#9CA3AF] text-center leading-relaxed">
                  Apply AI models with drag-and-drop nodes. Transcribe, analyze, enhance, and transform.
                </p>
              </div>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-10 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[rgba(176,48,82,0.4)] group-hover:shadow-2xl group-hover:shadow-[rgba(176,48,82,0.6)] transition-all duration-500 group-hover:scale-110 mx-auto">
                  <FileOutput className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B03052] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-[rgba(176,48,82,0.5)]">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Smart Output</h3>
                <p className="text-[#9CA3AF] text-center leading-relaxed">
                  Export results in any format. Deploy to production with one click. Scale instantly.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Who <span className="bg-gradient-to-r from-[#B03052] to-[#D76C82] bg-clip-text text-transparent">Uses</span> VocalFlow Clone?
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Trusted by teams building the future of voice AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Use Case 1 */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] group hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/0 to-[#B03052]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B03052]/20 to-[#D76C82]/20 rounded-2xl flex items-center justify-center mb-6 border border-[rgba(176,48,82,0.3)] group-hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[rgba(176,48,82,0.4)]">
                <Code2 className="w-8 h-8 text-[#D76C82]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developers</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Build AI voice apps faster with visual workflows and plug-and-play integrations
              </p>
            </div>
          </Card>

          {/* Use Case 2 */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] group hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/0 to-[#B03052]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B03052]/20 to-[#D76C82]/20 rounded-2xl flex items-center justify-center mb-6 border border-[rgba(176,48,82,0.3)] group-hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[rgba(176,48,82,0.4)]">
                <Headphones className="w-8 h-8 text-[#D76C82]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Centers</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Automate voice routing, transcription, and analysis for better customer experiences
              </p>
            </div>
          </Card>

          {/* Use Case 3 */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] group hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/0 to-[#B03052]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B03052]/20 to-[#D76C82]/20 rounded-2xl flex items-center justify-center mb-6 border border-[rgba(176,48,82,0.3)] group-hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[rgba(176,48,82,0.4)]">
                <Users className="w-8 h-8 text-[#D76C82]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support Teams</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Streamline customer support with intelligent voice-to-text and sentiment analysis
              </p>
            </div>
          </Card>

          {/* Use Case 4 */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] group hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/0 to-[#B03052]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B03052]/20 to-[#D76C82]/20 rounded-2xl flex items-center justify-center mb-6 border border-[rgba(176,48,82,0.3)] group-hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[rgba(176,48,82,0.4)]">
                <Rocket className="w-8 h-8 text-[#D76C82]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Startups</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Launch voice AI products faster without building infrastructure from scratch
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose VocalFlow Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-[#B03052] to-[#D76C82] bg-clip-text text-transparent">VocalFlow Clone?</span>
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            Built for speed, scale, and simplicity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-[#12121A] to-[#1A1A24] border border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] group hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B03052]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <Workflow className="w-12 h-12 text-[#D76C82] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3">No-Code Builder</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Visual drag-and-drop interface. No coding required.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-[#12121A] to-[#1A1A24] border border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] group hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B03052]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <Gauge className="w-12 h-12 text-[#D76C82] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3">Real-Time</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Process voice streams with ultra-low latency.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-[#12121A] to-[#1A1A24] border border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] group hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B03052]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <Plug className="w-12 h-12 text-[#D76C82] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3">AI Integrations</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Connect to leading AI models instantly.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-[#12121A] to-[#1A1A24] border border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.6)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.3)] group hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B03052]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <Upload className="w-12 h-12 text-[#D76C82] mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3">Fast Deploy</h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Ship to production in seconds, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="relative">
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/20 via-[#D76C82]/10 to-transparent rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-[#12121A]/60 backdrop-blur-xl border border-[rgba(176,48,82,0.3)] rounded-3xl p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-[#D76C82]/5"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-[#1A1A24] border border-[rgba(176,48,82,0.3)] px-4 py-2 rounded-full mb-8">
                <Play className="w-4 h-4 text-[#D76C82]" />
                <span className="text-sm text-[#9CA3AF]">Interactive Demo</span>
              </div>

              <h2 className="text-5xl font-bold mb-6">
                See It <span className="bg-gradient-to-r from-[#B03052] to-[#D76C82] bg-clip-text text-transparent">In Action</span>
              </h2>
              <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto mb-12 leading-relaxed">
                Experience the power of visual AI voice workflows. Build your first pipeline in minutes with our interactive demo.
              </p>

              {/* Mock Canvas Preview */}
              <div className="max-w-5xl mx-auto mb-12">
                <div className="relative bg-gradient-to-br from-[#1A1A24] to-[#12121A] rounded-2xl p-12 border border-[rgba(176,48,82,0.2)] shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Simplified Workflow Preview */}
                  <div className="relative flex items-center justify-center gap-8">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center gap-3 group/node">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-2xl flex items-center justify-center shadow-lg shadow-[rgba(176,48,82,0.4)] group-hover/node:scale-110 transition-transform duration-300 group-hover/node:shadow-2xl group-hover/node:shadow-[rgba(176,48,82,0.6)]">
                        <Mic className="w-12 h-12 text-white" />
                      </div>
                      <span className="text-sm text-[#9CA3AF] font-medium">Input</span>
                    </div>

                    {/* Connector 1 */}
                    <div className="w-16 h-1 bg-gradient-to-r from-[#B03052] to-[#D76C82] rounded-full"></div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center gap-3 group/node">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#D76C82] to-[#B03052] rounded-2xl flex items-center justify-center shadow-lg shadow-[rgba(215,108,130,0.4)] group-hover/node:scale-110 transition-transform duration-300 group-hover/node:shadow-2xl group-hover/node:shadow-[rgba(215,108,130,0.6)]">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      <span className="text-sm text-[#9CA3AF] font-medium">Process</span>
                    </div>

                    {/* Connector 2 */}
                    <div className="w-16 h-1 bg-gradient-to-r from-[#D76C82] to-[#B03052] rounded-full"></div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center gap-3 group/node">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-2xl flex items-center justify-center shadow-lg shadow-[rgba(176,48,82,0.4)] group-hover/node:scale-110 transition-transform duration-300 group-hover/node:shadow-2xl group-hover/node:shadow-[rgba(176,48,82,0.6)]">
                        <FileOutput className="w-12 h-12 text-white" />
                      </div>
                      <span className="text-sm text-[#9CA3AF] font-medium">Output</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => navigate('/app')}
                  size="lg"
                  className="bg-gradient-to-r from-[#B03052] to-[#D76C82] hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.5)] text-white px-10 py-7 rounded-xl transition-all duration-300 text-lg group hover:scale-105 font-semibold"
                >
                  Try Demo Now
                  <Play className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[rgba(176,48,82,0.3)] bg-[#1A1A24] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.5)] text-[#F5F5F7] px-10 py-7 rounded-xl backdrop-blur-sm text-lg transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <FileText className="mr-2 w-5 h-5" />
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Improved) */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.4)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(176,48,82,0.2)]">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[rgba(176,48,82,0.3)]">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Voice Input</h3>
            <p className="text-[#9CA3AF]">
              Capture and process voice data with advanced AI transcription and analysis.
            </p>
          </Card>

          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.4)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(176,48,82,0.2)]">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[rgba(176,48,82,0.3)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Processing</h3>
            <p className="text-[#9CA3AF]">
              Transform voice with cutting-edge AI models. Analyze, enhance, and understand.
            </p>
          </Card>

          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.4)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(176,48,82,0.2)]">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[rgba(176,48,82,0.3)]">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Output</h3>
            <p className="text-[#9CA3AF]">
              Export processed results in any format. Deploy anywhere instantly.
            </p>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-5xl font-bold text-center mb-6">
          Trusted by <span className="bg-gradient-to-r from-[#B03052] to-[#D76C82] bg-clip-text text-transparent">Voice Engineers</span>
        </h2>
        <p className="text-xl text-[#9CA3AF] text-center mb-20 max-w-2xl mx-auto">
          See what builders are saying about VocalFlow Clone
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Chen", role: "AI Engineer", quote: "VocalFlow Clone transformed how we build voice apps. Ship 10x faster.", avatar: "SC" },
            { name: "Marcus Webb", role: "Product Lead", quote: "The visual workflow builder is incredibly intuitive. Our entire team uses it.", avatar: "MW" },
            { name: "Lisa Kumar", role: "CTO", quote: "Best voice processing tool we've used. Production-ready from day one.", avatar: "LK" }
          ].map((testimonial, i) => (
            <Card key={i} className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl backdrop-blur-sm hover:border-[rgba(176,48,82,0.4)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(176,48,82,0.2)] group hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/0 to-[#B03052]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <p className="text-[#9CA3AF] mb-8 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-full flex items-center justify-center shadow-lg shadow-[rgba(176,48,82,0.3)] group-hover:shadow-xl group-hover:shadow-[rgba(176,48,82,0.5)] transition-all duration-300">
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-[#9CA3AF]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">
        <div className="relative">
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/30 via-[#D76C82]/20 to-[#B03052]/30 rounded-3xl blur-3xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-[#12121A] to-[#1A1A24] backdrop-blur-xl border border-[rgba(176,48,82,0.3)] rounded-3xl p-20 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/10 to-[#D76C82]/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#B03052] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#D76C82] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative text-center">
              <h2 className="text-6xl font-bold mb-8 leading-tight">
                Start Building AI Voice
                <br />
                <span className="bg-gradient-to-r from-[#B03052] via-[#D76C82] to-[#B03052] bg-clip-text text-transparent">
                  Workflows Today
                </span>
              </h2>
              <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto mb-12 leading-relaxed">
                Join thousands of developers shipping voice AI products faster with VocalFlow Clone
              </p>

              <div className="flex gap-6 justify-center">
                <Button
                  onClick={() => navigate('/app')}
                  size="lg"
                  className="bg-gradient-to-r from-[#B03052] to-[#D76C82] hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.6)] text-white px-12 py-8 rounded-xl transition-all duration-300 text-xl group hover:scale-110 font-bold"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[rgba(176,48,82,0.4)] bg-transparent hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.6)] text-[#F5F5F7] px-12 py-8 rounded-xl backdrop-blur-sm text-xl transition-all duration-300 hover:scale-110 font-bold"
                >
                  <Play className="mr-2 w-6 h-6" />
                  View Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center justify-center gap-8 text-sm text-[#9CA3AF]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D76C82]" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D76C82]" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D76C82]" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
