import React from "react";
import { Plus, Minus, Maximize, Mic, Zap, FileText, Play, Database, Mail, MessageSquare, History } from "lucide-react";

const ICON_MAP = {
  "Audio Input": Mic,
  "Webhook Trigger": Play,
  "AI Analysis": Zap,
  "Transcribe": FileText,
  "Audio Filter": Database,
  "Send Email": Mail,
  "Save to Notion": MessageSquare,
  "Save to History": History
};

export default function FlowCanvas({ nodes, setNodes, selectedNodeId, setSelectedNodeId }) {
  
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();

    const canvasBounds = event.currentTarget.getBoundingClientRect();
    const data = JSON.parse(event.dataTransfer.getData("application/reactflow"));

    // Calculate position relative to canvas
    const x = event.clientX - canvasBounds.left - 100; // Offset for node width/2 (approx)
    const y = event.clientY - canvasBounds.top - 40;  // Offset for node height/2 (approx)

    const newNode = {
      id: `node-${Date.now()}`,
      type: data.type,
      x: x,
      y: y,
      label: data.label,
      description: data.description,
      icon: ICON_MAP[data.label] || FileText
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <div 
      className="flex-1 relative overflow-hidden bg-[#0B0B10] app-canvas select-none"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={() => setSelectedNodeId(null)}
    >
      {/* Sample Connection Lines */}
      {/* Note: In a full implementation, these would be dynamic based on node state */}
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
      {nodes.map((node) => (
        <div 
          key={node.id}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedNodeId(node.id);
          }}
          className={`app-node app-node-${node.type} ${selectedNodeId === node.id ? 'app-node-selected' : ''} app-node-appear`}
          style={{ left: node.x, top: node.y, position: 'absolute' }}
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
        Drop nodes to build • Space + Drag to pan
      </div>
    </div>
  );
}
