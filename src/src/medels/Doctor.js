const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String,
  fechaInicioLaboral: Date,
  sueldo: Number,
  periodoPago: String,
  turnoLaboral: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);
