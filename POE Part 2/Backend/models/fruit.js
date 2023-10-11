const mongoose = require('mongoose')

const fruitschema = mongoose.Schema(
    {
        id: {type: String, required:true},
        name: {type: String, required:true} 
    }
)

module.exports = mongoose.model('Fruit' ,fruitschema)