import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import NodeSidebar from "../components/workflow/NodeSidebar";
import FlowCanvas from "../components/workflow/FlowCanvas";
import OutputPanel from "../components/workflow/OutputPanel";
import "./AppPage.css";

export default function AppPage() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="h-screen bg-[#0B0B10] flex flex-col overflow-hidden dashboard-animate-in">
      <Navbar />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Node Library */}
        <NodeSidebar />

        {/* Center Canvas - Workflow Builder */}
        <div className="flex-1 relative flex overflow-hidden">
            <FlowCanvas selectedNode={selectedNode} setSelectedNode={setSelectedNode} />
        </div>

        {/* Right Panel - Output & Settings */}
        <OutputPanel selectedNode={selectedNode} />
      </div>
    </div>
  );
}
