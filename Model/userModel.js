const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
    default: [],
    validate: [
      (array) =>
        array.length === 0 ||
        array.every((element) => {
          const keys = Object.keys(element);
          return keys.every(() =>
            keys.every(
              () =>
                typeof element[keys[0]] === "boolean" &&
                typeof element[keys[1]] === "string"
            )
          );
        }),
      "No son concretas",
    ],
  },
  personality: {
    type: Object,
    required: true,
    validate: [
      (obj) =>
        obj.constructor === Object &&
        Object.values(obj).every((element) => typeof element === "string"),
      "Wrong personality object",
    ],
  },
});

//El primer parametro es el nombre del modelo
//El segundo parametro es el esquema
//EL TERCER PARAMETRO ES EL NOMBRE DE LA COLECCION DENUESTRA BASE DE DATOS
const User = mongoose.model("User", userSchema, "users");

module.exports = User;
