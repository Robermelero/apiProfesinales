const {Schema, model} = require("mongoose")

const StarSchema = new Schema(
    {
        name: string,
        surname: string,
        age: number,
        photo: string,
        nationality: string,
        oscarsNumber: number,
        profession: string,
    }
)

module.exports = model("Star", StarSchema, "star")