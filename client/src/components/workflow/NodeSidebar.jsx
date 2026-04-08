import React from "react";
import { Mic, Zap, FileText, Mail, MessageSquare, Play, Database, History } from "lucide-react";

const NODE_TYPES = [
  {
    title: "Input Nodes",
    nodes: [
      { id: "input-audio", label: "Audio Input", icon: Mic, description: "Stream or upload audio files" },
      { id: "input-trigger", label: "Webhook Trigger", icon: Play, description: "Trigger via API call" }
    ]
  },
  {
    title: "Processing Nodes",
    nodes: [
      { id: "proc-ai", label: "AI Analysis", icon: Zap, description: "Grok-powered intelligence" },
      { id: "proc-transcribe", label: "Transcribe", icon: FileText, description: "Deepgram-powered speech to text" },
      { id: "proc-filter", label: "Audio Filter", icon: Database, description: "Clean and normalize audio" }
    ]
  },
  {
    title: "Output Nodes",
    nodes: [
      { id: "out-email", label: "Send Email", icon: Mail, description: "Send results to recipients" },
      { id: "out-notion", label: "Save to Notion", icon: MessageSquare, description: "Store in Notion database" },
      { id: "out-history", label: "Save to History", icon: History, description: "Log result to workspace" }
    ]
  }
];

export default function NodeSidebar() {
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar-header">
        <h2 className="text-[#F5F5F7] font-bold text-lg">Node Library</h2>
        <p className="text-xs text-[#6B7280] mt-1">Drag and drop to build</p>
      </div>

      <div className="app-sidebar-section">
        {NODE_TYPES.map((category, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="app-sidebar-section-title">{category.title}</h3>
            <div className="space-y-3">
              {category.nodes.map((node) => (
                <div key={node.id} className="app-node-library-item group">
                  <div className="app-node-library-icon group-hover:scale-105 transition-transform">
                    <node.icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#F5F5F7]">{node.label}</div>
                    <div className="text-[10px] text-[#6B7280] leading-tight">{node.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
