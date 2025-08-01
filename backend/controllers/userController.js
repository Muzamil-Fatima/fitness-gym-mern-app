import User from "../models/User.js";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // handle optional profile image
    const profileImage = req.files?.profileImage
      ? req.files.profileImage[0].path
      : null;

    const newUser = await User.create({
      name,
      email,
      password,
      profileImage, // null if not uploaded
    });

    res.status(201).json({
      message: "User Created Successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all users
export const AllUsers = async (req, res) => {
  try {
    const user = await User.find().sort({
      status: 1,
      createdAt: -1,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

//Soft Delete
export const softDeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { status: "Finished" },
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User status updated to finished",
      user: updateUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error });
  }
};

// Update a user
