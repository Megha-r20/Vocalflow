import React from 'react';

export default function NodeSidebar() {
  return (
    <aside className="w-64 bg-[#12121A] border-r border-[#B03052]/15 p-4 flex flex-col gap-4">
      <h3 className="text-[#F5F5F7] font-semibold">Nodes</h3>
      <div className="bg-[#1A1A24] border border-[#B03052]/15 p-3 rounded-lg text-sm text-[#9CA3AF]">
        Input Node
      </div>
      <div className="bg-[#1A1A24] border border-[#B03052]/15 p-3 rounded-lg text-sm text-[#9CA3AF]">
        Prompt Node
      </div>
      <div className="bg-[#1A1A24] border border-[#B03052]/15 p-3 rounded-lg text-sm text-[#9CA3AF]">
        Output Node
      </div>
    </aside>
  );
}
