const mongoose = require ('mongoose');
// Define the schema for Person
const personSchema= new mongoose. Schema({
    name: {
        type: String,
        required: true  // Name is a required field
      },
      age: {
        type: Number
      },
      favoriteFoods: {
        type: [String],  // Array of strings
        required: true  // favoriteFoods is required
      }
    });
    
// Create the model from the schema
const Person = mongoose.model('Person', personSchema);

module.exports = Person;