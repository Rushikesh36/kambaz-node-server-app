import { v4 as uuidv4 } from "uuid";
import AssignmentsModel from "./model.js";

export default function AssignmentsDao() {
    async function findAssignmentsForCourse(courseId) {
        return AssignmentsModel.find({ course: courseId });
    }

    async function createAssignment(assignment) {
        const id = assignment._id || uuidv4();
        const doc = { ...assignment, _id: id };
        const created = await AssignmentsModel.create(doc);
        return created;
    }

    async function deleteAssignment(assignmentId) {
        return AssignmentsModel.deleteOne({ _id: assignmentId });
    }

    async function updateAssignment(assignmentId, assignmentUpdates) {
        const { _id, ...rest } = assignmentUpdates;
        return AssignmentsModel.findOneAndUpdate(
            { _id: assignmentId },
            { $set: rest },
            { new: true }
        );
    }

    return {
        findAssignmentsForCourse,
        createAssignment,
        deleteAssignment,
        updateAssignment,
    };
}