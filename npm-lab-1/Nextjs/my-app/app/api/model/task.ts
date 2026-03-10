
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskId: {
    type: String,
    required: true,
    unique: true
  },
  taskTitle: {
    type: String,
    required: true,
    trim: true
  },
  taskDescription: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true   // adds createdAt and updatedAt
});

export default mongoose.model("Task", taskSchema);