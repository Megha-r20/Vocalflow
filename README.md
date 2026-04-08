# 🎙️ VocalFlow

**VocalFlow** is a modern, enterprise-ready AI orchestration platform designed to transform raw audio into structured, actionable intelligence. By combining a high-performance visual workflow builder with a multi-LLM pipeline, VocalFlow enables teams to design and deploy complex voice-to-logic automated systems in minutes.

---

## 🛠️ Performance & Capabilities

### 🎨 Visual Orchestration Engine
- **Coordinate-Aware Canvas**: A high-fidelity, drag-and-drop workspace built for complex node-based architecture.
- **Dynamic Node Interaction**: Real-time spawning and configuration of data processors, audio listeners, and intelligence analysts.
- **Modular Pipeline Logic**: Seamlessly connect disparate AI services into a unified execution stream.

### 🧠 Modern Intelligence Stack
VocalFlow employs a multi-tiered AI pipeline to ensure both depth of analysis and speed of execution:
- **Deepgram Nova-2**: High-accuracy, ultra-low latency Speech-to-Text (STT) layer for real-time transcription.
- **xAI Grok-1**: The semantic analysis engine, utilized for deep contextual understanding and complex prompt processing.
- **Groq Llama-3**: Optimized for high-speed inference, providing rapid responses for execution nodes within the workflow.

### 🔒 Secure Infrastructure
- **JWT-Based Security**: Robust authentication layer ensuring all user data, custom workflows, and API integrations remain isolated and protected.
- **Persistent Data Layers**: Full Mongoose-driven persistence for custom workflow configurations and execution history logs.
- **Real-Time Monetization Tracking**: Built-in credit management system with detailed usage analytics for every integrated microservice.

---

## 🚀 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS v4 |
| **Routing** | React Router v7 (Data Library Architecture) |
| **Animations** | Framer Motion (Micro-interactions) |
| **Backend** | Node.js, Express.js (ES Modules) |
| **Database** | MongoDB, Mongoose ODM |
| **Security** | JSON Web Tokens (JWT), Bcrypt.js |
| **Icons** | Lucide-react |

---

## 📁 Project Architecture

```text
Vocalflow/
├── client/                 # Frontend Application Layer
│   ├── src/
│   │   ├── components/     # Atomic UI components and layout wrappers
│   │   ├── context/        # Global state (Auth, App Configuration)
│   │   ├── pages/          # High-fidelity view components
│   │   └── App.jsx         # Unified RRv7 Navigation Entrypoint
├── server/                 # Backend Infrastructure Layer
│   ├── controllers/        # Request-Response & Logic Handlers
│   ├── models/             # Mongoose Persistence Schemas (User, History, Workflow)
│   ├── routes/             # RESTful API Endpoint Definitions
│   └── services/           # Decoupled External API Integrations (Deepgram, xAI, Groq)
└── README.md
```

---

## 💎 Design Language

VocalFlow features a **Premium Dark Glassmorphism** design system, engineered for high-focus environments:
- **HSL-Based Color Geometry**: Utilizing a curated "Vocal Purple" (`#B03052`) and "Translucent Slate" palette.
- **High-Blur Foundations**: Surfaces engineered with `backdrop-filter` for an ultra-premium, modern SaaS aesthetic.
- **Atomic Micro-animations**: Leveraging Framer Motion for smooth state transitions and interactive feedback loops.

---

## 🛰️ Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- MongoDB instance (Local or Atlas)
- Valid API Keys for Deepgram, xAI (Grok), and Groq

### Installation

1. **Clone & Install Dependencies**
   ```bash
   git clone https://github.com/Megha-r20/Vocalflow.git
   cd Vocalflow
   cd server && npm install
   cd ../client && npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secure_secret
   DEEPGRAM_API_KEY=your_key
   GROK_API_KEY=your_key
   GROQ_API_KEY=your_key
   ```

3. **Execution**
   ```bash
   # Run Backend (from /server)
   npm run server

   # Run Frontend (from /client)
   npm run dev
   ```

---

## 🔮 Roadmap & Future Enhancements
- [ ] **Streaming Audio Support**: Real-time websocket-based workflow execution.
- [ ] **Multi-User Collaboration**: Live shared canvases for collaborative pipeline building.
- [ ] **Custom Webhooks**: Third-party integration support for external event triggering.

## 🤝 Contributing
Contributions are welcome! Please ensure that your pull requests follow the established architectural patterns (Service-Controller-Model) and maintain consistent code formatting.

## 📬 Contact
**VocalFlow Engineering Team**  
GitHub: [Megha-r20](https://github.com/Megha-r20)  
Project Link: [https://github.com/Megha-r20/Vocalflow](https://github.com/Megha-r20/Vocalflow)

---
*Built for the future of Intelligent Voice Orchestration.*
