const mongoose = require('mongoose');

const citaMedicaSchema = new mongoose.Schema({
  nombreDoctor: String,
  nombrePaciente: String,
  motivoConsulta: String,
  fechaConsulta: Date,
  horaConsulta: String,
});

module.exports = mongoose.model('CitaMedica', citaMedicaSchema);
