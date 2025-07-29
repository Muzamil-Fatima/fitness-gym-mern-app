import mongoose from "mongoose";
import sequence from "mongoose-sequence";
import bcrypt from "bcryptjs";

// create connection for plugin
const connection = mongoose.connection;
const AutoIncrease = sequence(mongoose);

// define the schema
const userSchema = new mongoose.Schema(
  {
    userId: { type: Number },
    name: { type: String, required: [true, "Name is required"], trim: true },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be 6 character long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    profileImage: {
      type: String,
      default: function () {
        return `https://ui-avatars.com/api/?name=${this.name}&background=random`;
      },
    },
    status: { type: String, enum: ["Finished", "Active"], default: "Active" },
  },
  { timestamps: true }
);
// auto increment apply to userId
userSchema.plugin(AutoIncrease, { inc_field: "userId" });

// Hash Password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// create model
const User = mongoose.model("User", userSchema);

export default User;
