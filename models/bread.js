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
    type: Schema.Types.ObjectID,
    ref:'Baker'
  }
})

//Helper Method
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}

//making a model and export
const Bread = mongoose.model('Bread',breadSchema)
module.exports =  Bread
