import React, { useState, useRef, useCallback } from "react";
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

const MIN_ZOOM = 0.3;
const MAX_ZOOM = 2.0;
const ZOOM_STEP = 0.15;

export default function FlowCanvas({ nodes, setNodes, selectedNodeId, setSelectedNodeId }) {
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // --------------- Zoom Controls ---------------
  const zoomIn = useCallback(() => {
    setScale(s => Math.min(MAX_ZOOM, parseFloat((s + ZOOM_STEP).toFixed(2))));
  }, []);

  const zoomOut = useCallback(() => {
    setScale(s => Math.max(MIN_ZOOM, parseFloat((s - ZOOM_STEP).toFixed(2))));
  }, []);

  const fitView = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // --------------- Pan Controls ---------------
  const onMouseDown = (e) => {
    // Only pan on the canvas background, not on nodes
    if (e.target !== canvasRef.current && !e.target.classList.contains('app-canvas-bg')) return;
    isPanning.current = true;
    panStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
    e.currentTarget.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isPanning.current) return;
    setPan({ x: e.clientX - panStart.current.x, y: e.clientY - panStart.current.y });
  };

  const onMouseUp = (e) => {
    isPanning.current = false;
    e.currentTarget.style.cursor = "grab";
  };

  // --------------- Scroll to Zoom ---------------
  const onWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setScale(s => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, parseFloat((s + delta).toFixed(2)))));
  };

  // --------------- Drop ---------------
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();
    const canvasBounds = event.currentTarget.getBoundingClientRect();
    const data = JSON.parse(event.dataTransfer.getData("application/reactflow"));
    const x = (event.clientX - canvasBounds.left - pan.x) / scale - 100;
    const y = (event.clientY - canvasBounds.top - pan.y) / scale - 40;
    const newNode = {
      id: `node-${Date.now()}`,
      type: data.type,
      x, y,
      label: data.label,
      description: data.description,
      icon: ICON_MAP[data.label] || FileText
    };
    setNodes((prev) => [...prev, newNode]);
  };

  return (
    <div
      ref={canvasRef}
      className="flex-1 relative overflow-hidden bg-[#0B0B10] app-canvas select-none"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={() => setSelectedNodeId(null)}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onWheel={onWheel}
    >
      {/* Transformable layer */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`, transformOrigin: "0 0" }}
      >
        {/* Sample Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
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
                <node.icon size={16} />
              </div>
              <div className="text-sm font-bold text-[#F5F5F7]">{node.label}</div>
            </div>
            <div className="app-node-body">
              <p className="text-[11px] text-[#6B7280]">{node.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Controls — OUTSIDE the transform layer so they stay fixed */}
      <div className="app-zoom-controls">
        <button
          className="app-zoom-button"
          onClick={(e) => { e.stopPropagation(); zoomIn(); }}
          title="Zoom In"
        >
          <Plus size={16} />
        </button>
        <button
          className="app-zoom-button"
          onClick={(e) => { e.stopPropagation(); zoomOut(); }}
          title="Zoom Out"
        >
          <Minus size={16} />
        </button>
        <button
          className="app-zoom-button"
          onClick={(e) => { e.stopPropagation(); fitView(); }}
          title="Fit to Screen"
        >
          <Maximize size={16} />
        </button>
        <div className="px-2 py-1 text-[10px] text-[#6B7280] text-center font-mono">
          {Math.round(scale * 100)}%
        </div>
      </div>

      {/* Quick Tooltip */}
      <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#12121A]/80 backdrop-blur-md border border-white/5 rounded-full text-[10px] text-[#6B7280]">
        Drop nodes to build • Scroll to zoom • Drag to pan
      </div>
    </div>
  );
}
