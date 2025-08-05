import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

// create connection
const connection = mongoose.connection;
const AutoIncrement = mongooseSequence(mongoose);
// schema
const appointmentSchema = new mongoose.Schema({
  appointmentId: { type: Number },
  refuserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  sessions: { type: Number },
  appointmentDate: {
    type: Date,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Upcoming", "Delayed", "InProcess", "Completed"],
    default: "Active",
  },
});
// auto increment apply
appointmentSchema.plugin(AutoIncrement, { inc_field: "appointmentId" });

// create model
const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;

