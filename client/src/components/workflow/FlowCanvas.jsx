import React from 'react';

export default function FlowCanvas({ selectedNode, setSelectedNode }) {
  return (
    <main className="flex-1 bg-[#0B0B10] relative overflow-hidden flex items-center justify-center">
      <div className="text-[#9CA3AF] text-sm animate-pulse">Drag and drop nodes to build your workflow</div>
    </main>
  );
}
