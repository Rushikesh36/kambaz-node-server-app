import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
    function findAllEnrollments() {
        return db.enrollments || [];
    }


    function findEnrollmentsForUser(userId) {
        const { enrollments = [] } = db;
        return enrollments.filter((e) => e.user === userId);
    }

    function enroll(userId, courseId) {
        if (!db.enrollments) db.enrollments = [];

        const existing = db.enrollments.find(
            (e) => e.user === userId && e.course === courseId
        );
        if (existing) {
            return existing;
        }

        const newEnrollment = {
            _id: uuidv4(),
            user: userId,
            course: courseId,
        };

        db.enrollments = [...db.enrollments, newEnrollment];
        return newEnrollment;
    }

    function unenroll(userId, courseId) {
        if (!db.enrollments) db.enrollments = [];
        const before = db.enrollments.length;
        db.enrollments = db.enrollments.filter(
            (e) => !(e.user === userId && e.course === courseId)
        );
        return { deletedCount: before - db.enrollments.length };
    }

    return {
        findAllEnrollments,
        findEnrollmentsForUser,
        enroll,
        unenroll,
    };
}