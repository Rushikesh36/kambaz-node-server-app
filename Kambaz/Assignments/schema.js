import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        title: { type: String, required: true },
        description: { type: String, default: "" },
        points: { type: Number, default: 0 },
        availableFrom: { type: String, default: "" },
        due: { type: String, default: "" },
        course: { type: String, required: true },
    },
    { collection: "assignments" }
);

export default schema;