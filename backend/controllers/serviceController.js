import Services from "../models/Service.js";

// createServices
export const createServices = async (req, res) => {
  try {
    const { servicesName, servicesDescription, status } = req.body;

    const newService = new Services({
      servicesName,
      servicesDescription,
      ServicesIcon: req.files["servicesIcon"][0].path,
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

