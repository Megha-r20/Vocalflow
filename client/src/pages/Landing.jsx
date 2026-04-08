import React from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Zap, ArrowRight, CheckCircle2, Sparkles, Brain, FileOutput, Code2, Headphones, Users, Building2, Rocket, Workflow, Gauge, Plug, Upload, Play, FileText, User } from "lucide-react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { BackgroundGlows } from "../components/common/BackgroundGlows";
import { HoverButton } from "../components/common/HoverEffects";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen text-[#F5F5F7] overflow-hidden relative"
      style={{ background: "linear-gradient(to bottom, #1a0b12, #000)" }}
    >
      {/* Background Glows (Same as Sign In page) */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      {/* <BackgroundGlows /> */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-24 text-center">
        {/* Large Static Plum Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#B03052]/20 blur-[150px] pointer-events-none z-0"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#0B0B13] border border-[rgba(176,48,82,0.1)] px-5 py-2 rounded-full mb-12 shadow-xl">
            <Sparkles className="w-4 h-4 text-[#B03052]" />
            <span className="text-sm text-[#9CA3AF] font-medium tracking-wide">AI-Powered Voice Workflows</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
            Build AI Voice Workflows
            <br />
            <span className="text-[#B03052]">Visually</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed">
              Design, connect, and deploy intelligent voice pipelines with our no-code <br className="hidden md:block" /> visual builder.
            </p>
            <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed">
              Just drag, drop, and ship.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-center">
            <HoverButton
              onClick={() => navigate('/signup')}
              className="px-8 py-4 text-base rounded-xl flex items-center gap-2 font-bold shadow-[0_0_20px_rgba(176,48,82,0.3)]"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </HoverButton>
            <HoverButton
              variant="secondary"
              className="px-8 py-4 text-base rounded-xl font-bold bg-[#12121A]/80 backdrop-blur-md border-[rgba(255,255,255,0.1)]"
            >
              View Demo
            </HoverButton>
          </div>
        </div>
      </section>

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

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              How It <span className="bg-gradient-to-r from-[#B03052] to-[#D76C82] bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto font-medium">
              Three simple steps to build powerful AI voice workflows
            </p>
          </div>

          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-card group" data-step="1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="step-icon-wrapper">
                  <Mic className="step-icon" />
                </div>
                <h3 className="step-title">Voice Input</h3>
                <p className="step-desc">
                  Connect your audio source or microphone. Support for real-time streaming and file uploads.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card group" data-step="2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="step-icon-wrapper">
                  <Brain className="step-icon" />
                </div>
                <h3 className="step-title">AI Processing</h3>
                <p className="step-desc">
                  Apply AI models with drag-and-drop nodes. Transcribe, analyze, enhance, and transform instantly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card group" data-step="3">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="step-icon-wrapper">
                  <FileOutput className="step-icon" />
                </div>
                <h3 className="step-title">Smart Output</h3>
                <p className="step-desc">
                  Export results in any format. Deploy to production with one click. Scale instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      {/* Who Uses Section */}
      <section className="who-uses">
        <div className="who-uses-header">
          <h2>
            Who <span>Uses</span> VocalFlow Clone?
          </h2>
          <p>
            Trusted by teams building the future of voice AI
          </p>
        </div>

        <div className="use-cases-container">
          {/* Use Case 1 */}
          <div className="use-case-card group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="use-case-icon">
                <Code2 />
              </div>
              <h3 className="use-case-title">Developers</h3>
              <p className="use-case-desc">
                Build AI voice apps faster with visual workflows and plug-and-play integrations
              </p>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="use-case-card group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="use-case-icon">
                <Headphones />
              </div>
              <h3 className="use-case-title">Call Centers</h3>
              <p className="use-case-desc">
                Automate voice routing, transcription, and analysis for better customer experiences
              </p>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="use-case-card group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="use-case-icon">
                <Users />
              </div>
              <h3 className="use-case-title">Support Teams</h3>
              <p className="use-case-desc">
                Streamline customer support with intelligent voice-to-text and sentiment analysis
              </p>
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="use-case-card group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="use-case-icon">
                <Rocket />
              </div>
              <h3 className="use-case-title">Startups</h3>
              <p className="use-case-desc">
                Launch voice AI products faster without building infrastructure from scratch
              </p>
            </div>
          </div>
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
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
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
              <div className="max-w-5xl mx-auto mb-10">
                <div className="relative bg-gradient-to-br from-[#1A1A24] to-[#12121A] rounded-2xl p-8 border border-[rgba(176,48,82,0.2)] shadow-2xl overflow-hidden group">
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
                  className="bg-gradient-to-r from-[#B03052] to-[#D76C82] hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.5)] text-white px-8 py-4 rounded-xl transition-all duration-300 text-base group hover:scale-105 font-semibold"
                >
                  Try Demo Now
                  <Play className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[rgba(176,48,82,0.3)] bg-[#1A1A24] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.5)] text-[#F5F5F7] px-8 py-4 rounded-xl backdrop-blur-sm text-base transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <FileText className="mr-2 w-4 h-4" />
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <Mic />
            </div>
            <h3 className="feature-title">Voice Input</h3>
            <p className="feature-desc">
              Capture and process voice data with advanced AI transcription and analysis.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <Zap />
            </div>
            <h3 className="feature-title">AI Processing</h3>
            <p className="feature-desc">
              Transform voice with cutting-edge AI models. Analyze, enhance, and understand.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <CheckCircle2 />
            </div>
            <h3 className="feature-title">Smart Output</h3>
            <p className="feature-desc">
              Export processed results in any format. Deploy anywhere instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2>
            Trusted by <span>Voice Engineers</span>
          </h2>
          <p>
            See what builders are saying about VocalFlow Clone
          </p>
        </div>

        <div className="testimonials-container">
          {[
            { name: "Sarah Chen", role: "AI Engineer", quote: "VocalFlow Clone transformed how we build voice apps. Ship 10x faster.", avatar: "SC" },
            { name: "Marcus Webb", role: "Product Lead", quote: "The visual workflow builder is incredibly intuitive. Our entire team uses it.", avatar: "MW" },
            { name: "Lisa Kumar", role: "CTO", quote: "Best voice processing tool we've used. Production-ready from day one.", avatar: "LK" }
          ].map((testimonial, i) => (
            <div key={i} className="testimonial-card group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B03052]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <p className="testimonial-text">
                  "{testimonial.quote}"
                </p>
                <div className="testimonial-user">
                  <div className="avatar">
                    <span>{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="user-name">{testimonial.name}</div>
                    <div className="user-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-24">
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

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => navigate('/app')}
                  size="lg"
                  className="bg-gradient-to-r from-[#B03052] to-[#D76C82] hover:shadow-2xl hover:shadow-[rgba(176,48,82,0.6)] text-white px-10 py-6 rounded-xl transition-all duration-300 text-lg group hover:scale-105 font-bold"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[rgba(176,48,82,0.4)] bg-transparent hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.6)] text-[#F5F5F7] px-10 py-6 rounded-xl backdrop-blur-sm text-lg transition-all duration-300 hover:scale-105 font-bold"
                >
                  <Play className="mr-2 w-5 h-5" />
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
