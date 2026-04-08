import React from "react";
import { Plus, Minus, Maximize, Mic, Zap, FileText, ArrowRight } from "lucide-react";

export default function FlowCanvas({ selectedNode, setSelectedNode }) {
  const sampleNodes = [
    { id: "node-1", type: "input", x: 100, y: 150, label: "Audio Input", description: "Vocal_Recording.mp3", icon: Mic },
    { id: "node-2", type: "processing", x: 450, y: 150, label: "AI Analysis", description: "Grok-1 Intelligence", icon: Zap },
    { id: "node-3", type: "output", x: 800, y: 150, label: "Save Results", description: "Workspace History", icon: FileText },
  ];

  return (
    <div className="flex-1 relative overflow-hidden bg-[#0B0B10] app-canvas select-none">
      {/* Background Grid is handled by CSS app-canvas */}
      
      {/* Sample Connection Lines (Simulated briefly for aesthetics) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <path 
          d="M 320 190 C 380 190, 380 190, 450 190" 
          className="app-connection-line app-connection-animated"
        />
        <path 
          d="M 670 190 C 730 190, 730 190, 800 190" 
          className="app-connection-line"
        />
      </svg>

      {/* Nodes */}
      {sampleNodes.map((node) => (
        <div 
          key={node.id}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedNode(node.id);
          }}
          className={`app-node app-node-${node.type} ${selectedNode === node.id ? 'app-node-selected' : ''} app-node-appear`}
          style={{ left: node.x, top: node.y }}
        >
          {/* Connection Ports */}
          <div className="app-port app-port-input" />
          <div className="app-port app-port-output" />

          <div className="app-node-header">
            <div className="app-node-icon">
              <node.icon size={20} />
            </div>
            <div className="text-sm font-bold text-[#F5F5F7]">{node.label}</div>
          </div>
          <div className="app-node-body">
            <p className="text-[11px] text-[#6B7280]">{node.description}</p>
          </div>
        </div>
      ))}

      {/* Zoom Controls */}
      <div className="app-zoom-controls">
        <button className="app-zoom-button"><Plus size={18} /></button>
        <button className="app-zoom-button"><Minus size={18} /></button>
        <button className="app-zoom-button"><Maximize size={18} /></button>
      </div>

      {/* Quick Tooltip */}
      <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#12121A]/80 backdrop-blur-md border border-white/5 rounded-full text-[10px] text-[#6B7280]">
        Right-click to open context menu • Space + Drag to pan
      </div>
    </div>
  );
}
