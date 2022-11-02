// require mongoose 
const mongoose = require('mongoose')
//shorthand for Schema constructor
const {Schema} = mongoose
//the schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500/png' },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
})
//making a model and export
const Bread = mongoose.model('Bread',breadSchema)
module.exports =  Bread
