import mongoose from "mongoose";

const ComicSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    title:{type:String},
    imageUrl:{type:String}
},{versionKey: false});

const comic = mongoose.model("lore", ComicSchema);

export default comic