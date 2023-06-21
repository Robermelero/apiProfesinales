const Star = require('../models/star')

const getProfesional = async (req, res) => {
  try {
    let { name, surname } = req.params;

    let star;

    if (name && surname) {
      star = await Star.findOne({ name, surname });
    } else {
      let { name: paramName, surnameame: paramSurname } = req.params;
      star = await Star.findOne({ firstName: paramFirstName, lastName: paramLastName });
    }

    if (star) {
      res.json({
        error: false,
        codigo: 200,
        mensaje: "Datos de la estrella",
        data: star,
      });
    } else {
      res.json({
        error: true,
        codigo: 404,
        mensaje: "Profesional no encontrado",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      codigo: 500,
      mensaje: "Error al obtener el profesional",
      data: null,
    });
  }
};

const getAllProfesionales = async (req, res) => {
  try {
    const profesionales = await Profesional.find();

    res.json({
      error: false,
      codigo: 200,
      mensaje: "Colección de profesionales",
      data: profesionales,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      codigo: 500,
      mensaje: "Error al obtener la colección de profesionales",
      data: null,
    });
  }
};

const addProfesional = async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const nuevoProfesional = new Profesional({ firstName, lastName });
    await nuevoProfesional.save();

    res.json({
      error: false,
      codigo: 200,
      mensaje: "Profesional añadido correctamente",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      codigo: 500,
      mensaje: "Error al añadir el profesional",
      data: null,
    });
  }
};

const updateProfesional = async (req, res) => {
  const { firstName } = req.body;
  try {
    await Profesional.updateOne({ firstName }, req.body);

    res.json({
      error: false,
      codigo: 200,
      mensaje: "Datos del profesional actualizados correctamente",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      codigo: 500,
      mensaje: "Error al modificar los datos del profesional",
      data: null,
    });
  }
};

const deleteProfesional = async (req, res) => {
  const { firstName } = req.body;
  try {
    await Profesional.deleteOne({ firstName });

    res.json({
      error: false,
      codigo: 200,
      mensaje: "Profesional eliminado correctamente",
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: true,
      codigo: 500,
      mensaje: "Error al eliminar el profesional",
      data: null,
    });
  }
};


  
  module.exports = { getAll, getByNameAndSurname, postStar, putStar, deleteStar };