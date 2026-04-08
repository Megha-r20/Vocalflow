import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  workflowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workflow',
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true, // e.g., 'Transcription', 'Analysis', 'Full Workflow'
  },
  status: {
    type: String,
    enum: ['Success', 'Failed', 'Processing'],
    default: 'Success',
  },
  duration: {
    type: String, // e.g., '1.2s'
  },
  tokens: {
    type: Number,
  },
  result: {
    type: mongoose.Schema.Types.Mixed, // Stores the JSON output of the workflow/service
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const History = mongoose.model('History', historySchema);
export default History;
