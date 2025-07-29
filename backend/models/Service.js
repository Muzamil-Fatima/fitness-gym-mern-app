import mongoose from "mongoose";
import sequence from "mongoose-sequence";

// create connection from

const connection = mongoose.connection;
const AutoIncrease = sequence(mongoose);

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
});
// auto increment apply to userId
servicesSchema.plugin(AutoIncrease, { inc_field: "servicesId" });

// create model
const Services = mongoose.model("Services", servicesSchema);
