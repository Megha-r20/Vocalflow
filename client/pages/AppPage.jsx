import { useState } from "react";
import Navbar from "../components/Navbar";
import NodeSidebar from "../components/workflow/NodeSidebar";
import FlowCanvas from "../components/workflow/FlowCanvas";
import OutputPanel from "../components/workflow/OutputPanel";

export default function AppPage() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="h-screen bg-[#0B0B10] flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Node Library */}
        <NodeSidebar />

        {/* Center Canvas - Workflow Builder */}
        <FlowCanvas selectedNode={selectedNode} setSelectedNode={setSelectedNode} />

        {/* Right Panel - Output & Settings */}
        <OutputPanel selectedNode={selectedNode} />
      </div>
    </div>
  );
}
