const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  qty: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Crud = mongoose.model('Crud', crudSchema);

module.exports = Crud;