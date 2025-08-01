import Services from "../models/Service.js";

// createServices
export const createServices = async (req, res) => {
  try {
    const { servicesName, servicesDescription, status } = req.body;

    const newService = new Services({
      servicesName,
      servicesDescription,
      servicesIcon: req.files["servicesIcon"][0].path,
      servicesImage: req.files["servicesImage"][0].path,
      status,
    });

    await newService.save();

    res.status(201).json({
      message: "Services created successfully",
      data: newService,
    });
  } catch (error) {
    console.log("Error creating services:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete Service
export const softDeleteServices = async (req, res) => {
  try {
    const { id } = req.params;
    const updateServices = await Services.findByIdAndUpdate(
      id,
      { status: "draft" },
      { new: true }
    );
    if (!updateServices) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({
      message: "Service Status updated to draft",
      Services: updateServices,
    });
  } catch (error) {
    console.error("Error in soft deleting services: ", error);
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

// All services
export const getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.status(200).json({ data: services });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch services", error: error.message });
  }
};
// Get Single Service
export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Services.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Services not found" });
    }
    res.status(200).json({ data: service });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch services", error: error.message });
  }
};

// Update Service
export const updateServices = async (req, res) => {
  try {
    const { servicesName, servicesDescription, status } = req.body;
    const { id } = req.params;
    const service = await Services.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    service.servicesName = servicesName || service.servicesName;
    service.servicesDescription =
      servicesDescription || service.servicesDescription;
    service.status = status || service.status;
    if (req.files["servicesIcon"]) {
      service.serviceIcon = req.files["servicesIcon"][0].path;
    }
    if (req.files["servicesImage"]) {
      service.servicesImage = req.files["servicesImage"][0].path;
    }

    await service.save();
    res.status(200).json({
      message: "Service update successfully",
      Services: service,
    });
  } catch (error) {
    console.log("Error updating services:", error);
    res
      .status(500)
      .json({ message: "Failed to update service", error: error.message });
  }
};

// restore service
export const restoreServices = async (req, res) => {
  try {
    const { id } = req.params;
    const restored = await Services.findByIdAndUpdate(
      id,
      { status: "Active" },
      { new: true }
    );
    if (!restored) {
      return res.status(404).json({ message: "Services not found" });
    }
    res.status(200).json({ message: "Services restored", data: restored });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to restore services", error: error.message });
  }
};
