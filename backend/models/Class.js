import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

// Get connection
const connection = mongoose.connection;
const AutoIncrement = AutoIncrementFactory(mongoose);

// Define Schema
const classSchema = new mongoose.Schema({
  classId: { type: Number },
  classTitle: { type: String, required: [true, "Title is required"] },
  classBanner: { type: String },
  classImage1: { type: String },
  classImage2: { type: String },
  classDescription: {
    type: String,
    required: true,
    maxLength: 615,
    trim: true,
  },
  classAvailability: {
    type: String,
    required: true,
    trim: true,
  },
});
// Apply auto-increment plugin to classId
classSchema.plugin(AutoIncrement, { inc_field: "classId" });
// create model
const Classes = mongoose.model("Classes", classSchema);
export default Classes;