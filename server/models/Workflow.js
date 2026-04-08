import mongoose from 'mongoose';

const workflowSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: 'Untitled Workflow',
  },
  nodes: {
    type: Array, // Stores the visual builder nodes and their data
    default: [],
  },
  edges: {
    type: Array, // Stores the connections between nodes
    default: [],
  },
  lastExecuted: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['active', 'draft', 'archived'],
    default: 'draft',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Workflow = mongoose.model('Workflow', workflowSchema);
export default Workflow;
