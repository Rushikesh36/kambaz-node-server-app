import mongoose from "mongoose";
import schema from "./schema.js";

const AssignmentsModel = mongoose.model("assignments", schema);
export default AssignmentsModel;