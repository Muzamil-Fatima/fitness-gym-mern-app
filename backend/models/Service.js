import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";


// create connection from

const connection = mongoose.connection;
const AutoIncrement = mongooseSequence(mongoose);

// Define schema
const servicesSchema = new mongoose.Schema({
  servicesId: { type: Number },
  servicesName: { type: String, required: [true, "Name is required"] },
  servicesIcon: { type: String },
  servicesImage: { type: String },
  servicesDescription: {
    type: String,
    required: true,
    trim: true,
    maxLength: 1200,
  },
  status: { type: String, enum: ["Active", "draft"], default: "Active" },
});
// auto increment apply to Service Id
servicesSchema.plugin(AutoIncrement, { inc_field: "servicesId" });

// create model
const Services = mongoose.model("Services", servicesSchema);

export default Services;