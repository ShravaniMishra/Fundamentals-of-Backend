const mongoose = require("mongoose")

const connection = mongoose.connect(`mongodb+srv://Shravani:Guddi@cluster0.e2jihjv.mongodb.net/Movies?retryWrites=true&w=majority`)

const movieSchema = mongoose.Schema({
    Name:String,
    Actor:String,
    Rating:Number,
})

const MovieModel = mongoose.model("details",movieSchema)


module.exports = {
connection,
MovieModel
}