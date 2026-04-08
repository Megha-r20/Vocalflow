import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import NodeSidebar from "../components/workflow/NodeSidebar";
import FlowCanvas from "../components/workflow/FlowCanvas";
import OutputPanel from "../components/workflow/OutputPanel";
import { Mic, Zap, FileText } from "lucide-react";
import "./AppPage.css";

export default function AppPage() {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  
  // Lifted state for workflow nodes
  const [nodes, setNodes] = useState([
    { id: "node-1", type: "input", x: 100, y: 150, label: "Audio Input", description: "Vocal_Recording.mp3", icon: Mic },
    { id: "node-2", type: "processing", x: 450, y: 150, label: "AI Analysis", description: "Grok-1 Intelligence", icon: Zap },
    { id: "node-3", type: "output", x: 800, y: 150, label: "Save Results", description: "Workspace History", icon: FileText },
  ]);

  const selectedNode = nodes.find(n => n.id === selectedNodeId);

  return (
    <div className="h-screen bg-[#0B0B10] flex flex-col overflow-hidden dashboard-animate-in">
      <Navbar />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Node Library */}
        <NodeSidebar />

        {/* Center Canvas - Workflow Builder */}
        <div className="flex-1 relative flex overflow-hidden">
            <FlowCanvas 
              nodes={nodes} 
              setNodes={setNodes} 
              selectedNodeId={selectedNodeId} 
              setSelectedNodeId={setSelectedNodeId} 
            />
        </div>

        {/* Right Panel - Output & Settings */}
        <OutputPanel selectedNode={selectedNode} />
      </div>
    </div>
  );
}
