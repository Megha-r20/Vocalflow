import React from 'react';

export default function OutputPanel({ selectedNode }) {
  return (
    <aside className="w-80 bg-[#12121A] border-l border-[#B03052]/15 p-4 overflow-y-auto">
      <h3 className="text-[#F5F5F7] font-semibold mb-4">Properties</h3>
      <div className="text-sm text-[#9CA3AF]">
        {selectedNode ? `Node: ${selectedNode}` : 'Select a node to see its properties'}
      </div>
    </aside>
  );
}
