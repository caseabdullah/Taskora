const mongoose = require("mongoose");

const task_schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  tasks: [
    {
      description: {
        type: String,
        required: true,
      },

      priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Low",
      },

      status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending",
      },

      createdAt: {
        type: String,
        default: () => new Date().toISOString().split("T")[0]
      },

      dueDate: {
        type: String,
        required: true,
      },
    },
  ],
});

const task_model = mongoose.model("task", task_schema);

module.exports = task_model;