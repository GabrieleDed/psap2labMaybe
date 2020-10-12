const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  position: {
    type: String
  },
  department: {
    type: String
  }
}, {
    collection: 'Employees'
  })

module.exports = mongoose.model('Employee', employeeSchema)