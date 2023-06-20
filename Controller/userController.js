const express = require("express");
const router = express.Router();
//Importamos el modelo userModel
const User = require("../Model/userModel");

//GET, OBTENER TODOS LOS USUARIOS
router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({ status: "succeeded", data, error: null });
  } catch (error) {
    res
      .status(400)
      .json({ status: "failed", data: null, error: error.message });
  }
});

// crear un usuario
router.post("/", async (req, res) => {
  try {
    const data = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      role: req.body.role,
      skills: req.body.skills,
      personality: req.body.personality,
    });
    await data.save();
    res.status(200).json({ status: "succeeded", data, error: null });
  } catch (error) {
    res
      .status(400)
      .json({ status: "failed", data: null, error: error.message });
  }
});

//Borrar un usuario
router.delete("/:id", (req, res) => {
  res.send(`DELETE one user ${req.params.id}`);
});

//Actualizar un usuario
router.patch("/:id", (req, res) => {
  res.send(`PATCH user ${req.params.id}`);
});

module.exports = router;
