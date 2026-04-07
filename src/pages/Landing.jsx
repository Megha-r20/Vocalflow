import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { 
  Mic, Brain, Send, Workflow, ChevronRight, Download,
  Code2, Headset, Users, Rocket, Zap, Activity, Blocks, Play, BookOpen
} from 'lucide-react';
import './Landing.css';

const Landing = () => {
  const steps = [
    {
      title: 'Voice Input',
      description: 'Capture high-fidelity audio securely from any channel.',
      icon: Mic
    },
    {
      title: 'AI Processing',
      description: 'Grok & Custom LLMs analyze, translate, and extract intent.',
      icon: Brain
    },
    {
      title: 'Smart Output',
      description: 'Instantly route data to your CRM, database, or API.',
      icon: Download
    }
  ];

  const useCases = [
    {
      title: 'Developers',
      description: 'Build native AI voice apps with our versatile SDKs & robust APIs.',
      icon: Code2
    },
    {
      title: 'Call Centers',
      description: 'Automate Q&A, triage inquiries, and escalate complex issues to agents.',
      icon: Headset
    },
    {
      title: 'Customer Support',
      description: 'Provide 24/7 intelligent voice assistance and personalized resolutions.',
      icon: Users
    },
    {
      title: 'Startups',
      description: 'Prototype quickly and launch your voice-first ideas in days, not months.',
      icon: Rocket
    }
  ];

  const coreFeatures = [
    {
      title: 'No-code builder',
      description: 'Visually map complex conversational flows.',
      icon: Blocks
    },
    {
      title: 'Real-time execution',
      description: 'Ultra-low latency for natural interactions.',
      icon: Activity
    },
    {
      title: 'Plug-and-play AI',
      description: 'Drop in Grok, OpenAI, or custom models.',
      icon: Zap
    },
    {
      title: 'Fast deployment',
      description: 'Publish instantly to mobile, web, or telecom.',
      icon: Rocket
    }
  ];

  const features = [
    {
      title: 'Voice Input Engines',
      description: 'Capture high-fidelity audio from any source. Supporting 100+ languages with Deepgram integration.',
      icon: Mic
    },
    {
      title: 'Intelligent Processing',
      description: 'Leverage Grok and custom LLMs to extract insights, summarize, or transform your voice data.',
      icon: Brain
    },
    {
      title: 'Advanced Delivery',
      description: 'Deliver processed data to any endpoint—CRM, email, database, or custom webhooks.',
      icon: Send
    },
    {
      title: 'Dynamic Workflows',
      description: 'Design complex logic visually. Connect nodes, condition branches, and build pipelines in seconds.',
      icon: Workflow
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="mesh-bg">
          <div className="mesh-blob blob-1"></div>
          <div className="mesh-blob blob-2"></div>
        </div>
        
        <div className="container hero-content">
          <h1 className="hero-title">
            Build AI Voice <br />
            <span className="text-gradient hover-glow">Workflows Visually</span>
          </h1>
          <p className="hero-subtitle">
            The next-generation visual builder for voice pipelines. 
            Connect input, AI processing, and output nodes to automate your voice tasks instantly.
          </p>
          <div className="hero-actions">
            <Button variant="primary" size="lg" className="glow-button">Get Started Free</Button>
            <Button variant="secondary" size="lg">Watch Demo</Button>
          </div>
          
          <div className="hero-preview glass glowing-border">
            <div className="preview-toolbar">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="address-bar">vocalflow.app/builder</div>
            </div>
            <div className="preview-image-mask">
              <img 
                src="https://framerusercontent.com/images/8rX7L7oXn1kXoZzIqXlJc7Q.png" 
                alt="Workspace Preview" 
                className="blurred-preview"
              />
              <div className="preview-overlay">
                <h3>Visual Canvas</h3>
                <p>Simple, powerful, and blazing fast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works container" id="how-it-works">
        <div className="section-header">
          <h2 className="section-title">How it works</h2>
          <p className="section-subtitle">A seamless journey from sound to solution.</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="step-card glass glass-card-hover">
                <div className="step-icon-wrapper">
                  <step.icon className="step-icon" size={32} />
                  <div className="icon-glow"></div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <ChevronRight className="connector-arrow text-secondary" size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="use-cases container" id="use-cases">
        <div className="section-header">
          <h2 className="section-title">Built for builders, optimized for everyone</h2>
          <p className="section-subtitle">Unlock the power of voice across any industry.</p>
        </div>
        
        <div className="use-case-grid">
          {useCases.map((uc, i) => (
            <div key={i} className="use-case-card glass neon-border-hover">
              <div className="use-case-icon">
                <uc.icon size={28} />
              </div>
              <div className="use-case-content">
                <h3>{uc.title}</h3>
                <p>{uc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE VOCALFLOW CLONE */}
      <section className="why-choose container" id="why-choose">
        <div className="why-choose-cards">
          {coreFeatures.map((feat, i) => (
            <div key={i} className="why-card glass glass-card-hover">
              <feat.icon className="why-icon" size={24} />
              <h4>{feat.title}</h4>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section className="interactive-demo container" id="demo">
        <div className="demo-wrapper glass glowing-border">
          <div className="demo-header">
            <h2 className="demo-title">Experience the Canvas</h2>
            <p className="demo-subtitle">See how easy it is to visually design your next voice project.</p>
          </div>
          
          <div className="mock-canvas">
            <div className="mock-node node-input">
              <Mic size={18} />
              <span>Listen</span>
            </div>
            <div className="mock-connector line-anim"></div>
            <div className="mock-node node-ai">
              <Brain size={18} />
              <span>Grok AI</span>
            </div>
            <div className="mock-connector line-anim-2"></div>
            <div className="mock-node node-output">
              <Send size={18} />
              <span>Respond</span>
            </div>
          </div>
          
          <div className="demo-actions">
            <Button variant="primary" size="lg" icon={Play} className="glow-button">Try Interactive Demo</Button>
            <Button variant="secondary" size="lg" icon={BookOpen}>View Documentation</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container" id="features">
        <div className="section-header">
          <h2 className="section-title">Everything you need to automate voice</h2>
          <p className="section-subtitle">Modular components for an intelligent pipeline.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="glass-card-hover-wrapper">
              <Card 
                title={feature.title} 
                subtitle={feature.description}
                icon={feature.icon}
                className="feature-card glass"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="testimonials container">
        <div className="testimonials-grid">
          <div className="testimonial glass glass-card-hover">
            <p>"The fastest way to build voice pipelines. We reduced our development time by 70%."</p>
            <div className="user-info">
              <img src="https://i.pravatar.cc/100?img=47" alt="Jane Doe" className="avatar-img" />
              <div>
                <p className="user-name">Jane Doe</p>
                <p className="user-role">CTO at VoiceAI</p>
              </div>
            </div>
          </div>
          <div className="testimonial glass glass-card-hover">
            <p>"VocalFlow is what Voiceflow should have been for pro developers. Deepgram + Grok is a killer combo."</p>
            <div className="user-info">
              <img src="https://i.pravatar.cc/100?img=33" alt="Mark Smith" className="avatar-img" />
              <div>
                <p className="user-name">Mark Smith</p>
                <p className="user-role">Lead Engineer at Speakify</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA SECTION */}
      <section className="strong-cta">
        <div className="container">
          <div className="cta-banner gradient-bg glowing-border">
            <div className="cta-content">
              <h2>Start Building AI Voice Workflows Today</h2>
              <p>Deploy intelligent, scalable voice systems in minutes. No credit card required.</p>
              <div className="cta-buttons">
                <Button variant="primary" size="lg" icon={ChevronRight} className="glow-button">Get Started</Button>
                <Button variant="secondary" size="lg">View Demo</Button>
              </div>
            </div>
            
            <div className="cta-mesh-blob"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
