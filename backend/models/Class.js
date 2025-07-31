import mongoose from "mongoose";
import sequence from "mongoose-sequence";

// create connection
const connection = mongoose.connection;
const AutoIncrease = sequence(mongoose);

// Define Schema
const classSchema = new mongoose.Schema({
  classId: { type: Number },
  classTitle: { type: String, required: [true, "Title is required"] },
  classImage1: { type: String },
  classImage2: { type: String },
  classBanner: { type: String },
  classDescription: {
    type: String,
    required: true,
    maxLength: 615,
    trim: true,
  },
  classAvailability: { type: dropDown },
});

// auto increase applying to class ID
classSchema.plugin(AutoIncrease, { inc_field: "classId" });

// create model
const Classes = mongoose.model("Classes", classSchema);
