import React, { useState } from 'react';
import { 
  Play, 
  Save, 
  Trash2, 
  Mic, 
  Brain, 
  Send,
  Plus,
  Search,
  Settings2,
  ChevronRight,
  Database,
  Globe,
  Terminal
} from 'lucide-react';
import './AppPage.css';

const AppPage = () => {
  const [activeNode, setActiveNode] = useState(null);

  const nodeTypes = [
    { name: 'Input', icon: Mic, color: '#B03052' },
    { name: 'Processing', icon: Brain, color: '#9333ea' },
    { name: 'Output', icon: Send, color: '#2563eb' },
    { name: 'Database', icon: Database, color: '#059669' },
    { name: 'Webhook', icon: Globe, color: '#d97706' },
    { name: 'Script', icon: Terminal, color: '#4b5563' },
  ];

  const nodes = [
    { id: 1, type: 'Input', name: 'Microphone Stream', x: 100, y: 150, status: 'Active' },
    { id: 2, type: 'Processing', name: 'Grok Summarizer', x: 400, y: 100, status: 'Active' },
    { id: 3, type: 'Output', name: 'Email Team', x: 700, y: 150, status: 'Idle' },
    { id: 4, type: 'Processing', name: 'Translate to Spanish', x: 400, y: 300, status: 'Idle' },
  ];

  return (
    <div className="builder-page">
      {/* Sidebar for Draggable Nodes */}
      <aside className="builder-sidebar glass">
        <div className="sidebar-search">
          <Search size={16} />
          <input type="text" placeholder="Search nodes..." />
        </div>
        <div className="node-group">
          <p className="group-label">Core Nodes</p>
          {nodeTypes.map((node) => (
            <div key={node.name} className="node-item" draggable>
              <div className="node-icon" style={{ color: node.color }}>
                <node.icon size={18} />
              </div>
              <span>{node.name}</span>
              <Plus size={14} className="add-icon" />
            </div>
          ))}
        </div>
      </aside>

      {/* Main Builder Canvas */}
      <div className="builder-view">
        <div className="canvas-toolbar glass">
          <div className="toolbar-left">
            <span className="workflow-status">Live</span>
            <div className="separator"></div>
            <button className="toolbar-btn"><Save size={18} /><span>Save</span></button>
            <button className="toolbar-btn"><Trash2 size={18} /><span>Clear</span></button>
          </div>
          <div className="toolbar-right">
            <button className="run-btn"><Play size={18} /><span>Run Flow</span></button>
          </div>
        </div>

        <div className="canvas">
          <svg className="connections-layer">
            <path d="M 230 185 C 315 185, 315 135, 400 135" className="connection active" />
            <path d="M 530 135 C 615 135, 615 185, 700 185" className="connection" />
            <path d="M 230 185 C 315 185, 315 335, 400 335" className="connection" />
          </svg>

          {nodes.map((node) => (
            <div 
              key={node.id} 
              className={`node-card ${activeNode === node.id ? 'active' : ''}`}
              style={{ left: node.x, top: node.y }}
              onClick={() => setActiveNode(node.id)}
            >
              <div className="node-header">
                <div className="node-header-info">
                  <div className="node-type-icon">
                    {node.type === 'Input' && <Mic size={14} />}
                    {node.type === 'Processing' && <Brain size={14} />}
                    {node.type === 'Output' && <Send size={14} />}
                  </div>
                  <span className="node-type-label">{node.type}</span>
                </div>
                <Badge variant={node.status === 'Active' ? 'success' : 'default'} size="sm">
                  {node.status}
                </Badge>
              </div>
              <div className="node-body">
                <p className="node-name">{node.name}</p>
                <div className="node-ports">
                  <div className="port port-in"></div>
                  <div className="port port-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel for Settings */}
      <aside className={`builder-panel glass ${activeNode ? 'open' : ''}`}>
        {activeNode ? (
          <div className="panel-content">
            <div className="panel-header">
              <h3>Node Settings</h3>
              <button onClick={() => setActiveNode(null)} className="close-btn">&times;</button>
            </div>
            
            <div className="settings-section">
              <label>Node Name</label>
              <input type="text" defaultValue={nodes.find(n => n.id === activeNode)?.name} />
            </div>

            <div className="settings-section">
              <label>Model Configuration</label>
              <select>
                <option>Grok-1 (Advanced)</option>
                <option>GPT-4o</option>
                <option>Claude 3.5 Sonnet</option>
              </select>
            </div>

            <div className="settings-section">
              <label>Prompt</label>
              <textarea placeholder="Write your processing instructions..."></textarea>
            </div>

            <div className="panel-footer">
              <Button variant="primary" style={{ width: '100%' }}>Update Node</Button>
            </div>
          </div>
        ) : (
          <div className="panel-empty">
            <Settings2 size={48} />
            <p>Select a node to <br />configure its settings.</p>
          </div>
        )}
      </aside>
    </div>
  );
};

export default AppPage;
