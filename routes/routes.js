const ex = require("express");
const {
  fetchFarmers,
  fetchFarmer,
  saveFarmer,
  updateFarmer,
  deleteFarmer,
  fetchFarms,
  fetchFarm,
  saveFarm,
  updateFarm,
  deleteFarm,
} = require("../controllers/controllers");
const router = ex.Router();


const { loginUser, registerUser } = require("../controllers/auth_controller");


//// FARMER ROUTES ////
// route for all farmers
router.get("/farmers", fetchFarmers);

//route for a single farmer
router.get("/farmers/:id", fetchFarmer);

router.post("/farmer", saveFarmer);

router.put("/farmers/:id", updateFarmer);

router.delete("/farmers/:id", deleteFarmer);

//// END FARM ROUTES ////

//// FARM ROUTES ////
// route for all farms
router.get("/farms", fetchFarms);

//route for a single farm
router.get("/farms/:id", fetchFarm);

router.post("/farm", saveFarm);

router.put("/farms/:id", updateFarm);

router.delete("/farms/:id", deleteFarm);

//// END FARM ROUTES //



//// USER ROUTES ////


// route for user login
router.post("/login", loginUser);

// route for user registration
router.post("/register", registerUser);

module.exports = router;
