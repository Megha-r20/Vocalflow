import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { Mic, FileText, Mail, MessageSquare, ArrowRight, Zap, PlayCircle } from "lucide-react";
import "./Templates.css";

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState("All Templates");

  const categories = ["All Templates", "Productivity", "Communication", "Business", "Personal"];

  const templates = [
    {
      icon: FileText,
      title: "Voice to Summary",
      description: "Transform voice recordings into concise written summaries for meetings or notes.",
      category: "Productivity",
      badge: "Popular",
      nodes: [Mic, Zap, FileText]
    },
    {
      icon: Mail,
      title: "Voice to Email",
      description: "Convert voice notes directly into professional formatted email drafts.",
      category: "Communication",
      badge: null,
      nodes: [Mic, Zap, Mail]
    },
    {
      icon: MessageSquare,
      title: "Voice to Notes",
      description: "Extract key points and create structured notes from any audio file.",
      category: "Productivity",
      badge: "New",
      nodes: [Mic, Zap, MessageSquare]
    },
    {
      icon: Mic,
      title: "Meeting Transcript",
      description: "Full transcription with speaker identification and timestamping.",
      category: "Business",
      badge: "Popular",
      nodes: [Mic, Zap, FileText]
    },
    {
      icon: FileText,
      title: "Interview Analysis",
      description: "Analyze interviews and extract specific insights automatically.",
      category: "Business",
      badge: null,
      nodes: [Mic, Zap, FileText]
    },
    {
      icon: MessageSquare,
      title: "Podcast Summary",
      description: "Generate episode summaries and show notes from long-form audio.",
      category: "Communication",
      badge: "Premium",
      nodes: [Mic, Zap, MessageSquare]
    },
    {
      icon: Zap,
      title: "Daily Journaling",
      description: "Speak your thoughts and let AI organize them into a daily journal entry.",
      category: "Personal",
      badge: null,
      nodes: [Mic, Zap, FileText]
    },
    {
      icon: FileText,
      title: "Shopping List Creator",
      description: "Dictate your grocery needs and get a categorized shopping list.",
      category: "Personal",
      badge: "New",
      nodes: [Mic, Zap, MessageSquare]
    },
  ];

  const filteredTemplates = activeCategory === "All Templates" 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <div className="templates-container dashboard-animate-in">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="templates-header">
          <h1 className="templates-title">Workflow Templates</h1>
          <p className="templates-subtitle">Start with pre-built templates and customize them to your workflow</p>
        </div>

        {/* Categories Chips */}
        <div className="templates-categories">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`templates-category-chip ${activeCategory === cat ? 'templates-category-chip-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="templates-grid">
          {filteredTemplates.map((template, i) => (
            <div key={i} className="template-card">
              {/* Card Preview Area */}
              <div className="template-preview">
                {template.badge && (
                  <span className={`template-badge ${template.badge === 'Popular' ? 'template-badge-popular' : ''}`}>
                    {template.badge}
                  </span>
                )}
                <div className="template-preview-nodes">
                  {template.nodes.map((Icon, idx) => (
                    <React.Fragment key={idx}>
                      <div className="template-preview-node">
                        <Icon size={20} />
                      </div>
                      {idx < template.nodes.length - 1 && (
                        <div className="template-preview-connector" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="template-content">
                <div className="flex justify-between items-start mb-4">
                  <span className="template-tag">{template.category}</span>
                </div>
                <h3 className="template-title">{template.title}</h3>
                <p className="template-description">{template.description}</p>
                
                <Button className="template-use-button gap-2">
                  Use Template <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="templates-featured-cta flex flex-col items-center text-center">
          <div className="cta-icon-wrapper">
            <PlayCircle size={40} />
          </div>
          <h2 className="cta-title">Can't find what you need?</h2>
          <p className="cta-description">
            Create a custom workflow from scratch with our visual node-based builder, 
            designed for total audio control.
          </p>
          <Button className="cta-button">
            Start from Scratch
          </Button>
        </div>
      </div>
    </div>
  );
}
