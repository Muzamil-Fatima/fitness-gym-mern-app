import Classes from "../models/Class.js";

// createClasses
export const createClasses = async (req, res) => {
  try {
    const { classTitle, classDescription, classAvailability} = req.body;

    const newClass = new Classes({
      classTitle,
      classDescription,
      classAvailability,
      classBanner: req.files["classBanner"][0].path,
      classImage1: req.files["classImage1"][0].path,
      classImage2: req.files["classImage2"][0].path,
    });

    await newClass.save();

    res.status(201).json({
      message: "Class created successfully",
      data: newClass,
    });
  } catch (error) {
    console.log("Error creating class:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete Service
export const softDeleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const updateClass = await Classes.findByIdAndUpdate(
      id,
      { status: "draft" },
      { new: true }
    );
    if (!updateClass) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({
      message: "Class Status updated to draft",
      Classes: updateClass,
    });
  } catch (error) {
    console.error("Error in soft deleting class: ", error);
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

// All classes
export const getAllClasses = async (req, res) => {
  try {
    const classes = await Classes.find();
    res.status(200).json({ data: classes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch class", error: error.message });
  }
};
// Get Single Class
export const getClassById = async (req, res) => {
  try {
    const { id } = req.params;
    const singleClass = await Classes.findById(id);
    if (!singleClass) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(200).json({ data: singleClass });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch class", error: error.message });
  }
};

// Update Class
export const updateClass = async (req, res) => {
  try {
    const { classTitle, classDescription, status } = req.body;
    const { id } = req.params;
    const changeClass = await Classes.findById(id);
    if (!changeClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    changeClass.classTitle = classTitle || changeClass.classTitle;
    changeClass.classDescription =
      classDescription || changeClass.classDescription;
    changeClass.status = status || changeClass.status;
    if (req.files["classBanner"]) {
      changeClass.classBanner = req.files["classBanner"][0].path;
    }
    if (req.files["classImage1"]) {
      changeClass.classImage1 = req.files["classImage1"][0].path;
    }
    if (req.files["classImage2"]) {
      changeClass.classImage2 = req.files["classImage2"][0].path;
    }

    await changeClass.save();
    res.status(200).json({
      message: "Class update successfully",
      Classes: updateClass,
    });
  } catch (error) {
    console.log("Error updating class:", error);
    res
      .status(500)
      .json({ message: "Failed to update class", error: error.message });
  }
};

// restore class
export const restoreClass = async (req, res) => {
  try {
    const { id } = req.params;
    const restored = await Classes.findByIdAndUpdate(
      id,
      { status: "Active" },
      { new: true }
    );
    if (!restored) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(200).json({ message: "Class restored", data: restored });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to restore Class", error: error.message });
  }
};
