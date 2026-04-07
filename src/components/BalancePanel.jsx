import React from "react";
import Badge from "./UI/Badge";
import { Zap } from "lucide-react";

export default function BalancePanel() {
  return (
    <div className="flex items-center gap-3">
      <Badge
        variant="outline"
        className="bg-[#1A1A24] border-[rgba(176,48,82,0.2)] text-[#F5F5F7] px-3 py-1.5 gap-2 hover:border-[rgba(176,48,82,0.4)] transition-colors flex items-center"
      >
        <Zap className="w-3.5 h-3.5 text-[#D76C82]" />
        <span className="text-xs">Deepgram</span>
        <span className="text-xs font-semibold text-[#D76C82]">$24.50</span>
      </Badge>
      <Badge
        variant="outline"
        className="bg-[#1A1A24] border-[rgba(176,48,82,0.2)] text-[#F5F5F7] px-3 py-1.5 gap-2 hover:border-[rgba(176,48,82,0.4)] transition-colors flex items-center"
      >
        <Zap className="w-3.5 h-3.5 text-[#D76C82]" />
        <span className="text-xs">Grok</span>
        <span className="text-xs font-semibold text-[#D76C82]">$18.75</span>
      </Badge>
    </div>
  );
}
