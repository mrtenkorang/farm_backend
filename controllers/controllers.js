const { Farmer } = require("../models/farmer_model");
const { Farm } = require("../models/farm_model");

//// FARMER ENDPOINTS ////
saveFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.create(req.body);
    res.status(201).json({ message: "Farmer created", farmer });
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
  }
};

// Fetch all farmers (multiple records)
fetchFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find({});
    res.status(200).json({ farmers });
    console.log("All the farmers", farmers);
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
    return null;
  }
};

// fetch a farmer (single record)
fetchFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    console.log("single farmer", farmer);
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
  }
};

// update a farmer
updateFarmer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFarmer = await Farmer.findByIdAndUpdate(id, req.body);
    if (!updatedFarmer) {
      res.status(404).json({ message: "Farmer not found" });
    }
    res.status(200).json({ message: "Farmer updated", updatedFarmer });
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
  }
};

// delete a farmer
deleteFarmer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFarmer = await Farmer.findByIdAndDelete(id);
    if (!deletedFarmer) {
      res.status(404).json({ message: "Farmer not found" });
    }
    res.status(200).json({ message: "Farmer deleted", deletedFarmer });
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
  }
};
//// END FARMER ENDPOINTS ////

// updateFarmer = async(req, res)=> {
//     try {
//         const farmer = await Farmer.findById(req.params.id)
//         farmer.farmerFirstName = req.body.farmerFirstName
//         farmer.farmerLastName = req.body.farmerLastName
//         farmer.farmerIDType = req.body.farmerIDType
//         farmer.farmerIDNumber = req.body.farmerIDNumber
//         farmer.farmerTelephone = req.body.farmerTelephone
//         farmer.farm = req.body.farm
//         farmer.save()
//     } catch (error) {
//         res.status(500).json({message: "AN ERROR HAS OCCURED", error})
//         return null
//     }
// }

//// FARM ENDPOINTS ////
saveFarm = async (req, res) => {
  try {
    const {farmData} = req.body
    const farm = await Farm.create(req.body);
    res.status(201).json({ message: "Farm created", farm });
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
  }
};

// Fetch all farms (multiple records)
fetchFarms = async (req, res) => {
  try {
    const farms = await Farm.find({});
    res.status(200).json({ farms });
    console.log("All the farms", farms);
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
    return null;
  }
};

// fetch a farm (single record)
fetchFarm = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.id);
    console.log("single farm", farm);
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
  }
};

// update a farm
updateFarm = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFarm = await Farm.findByIdAndUpdate(id, req.body);
    if (!updatedFarm) {
      res.status(404).json({ message: "Farm not found" });
    }
    res.status(200).json({ message: "Farm updated", updatedFarm });
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
  }
};

// delete a farm
deleteFarm = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFarm = await Farm.findByIdAndDelete(id);
    if (!deletedFarm) {
      res.status(404).json({ message: "Farm not found" });
    }
    res.status(200).json({ message: "Farm deleted", deletedFarm });
  } catch (error) {
    res.status(500).json({ message: "AN ERROR HAS OCCURED", error });
  }
};
//// END FARM ENDPOINTS ////

module.exports = {
  fetchFarmers,
  fetchFarmer,
  updateFarmer,
  deleteFarmer,
  saveFarmer,
  fetchFarms,
  fetchFarm,
  saveFarm,
  updateFarm,
  deleteFarm,
};
