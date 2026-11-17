import express from "express"
import enrollmentController from "../controllers/enrollmentController.js"
import e from "express"


const router = express.Router()

router.post(
    "/",
    enrollmentController.createEnrollment
)

router.get(
    "/",
    enrollmentController.getAllEnrollments
)

router.get(
    "/:id",
    enrollmentController.getEnrollmentById
)

router.get(
    "/student/:studentId",
    enrollmentController.getEnrollmentByStudentId
)

router.get(
    "/subject/:subjectId",
    enrollmentController.getEnrollmentBySubjectId
)

router.get(
    "/status/:status",
    enrollmentController.getEnrollmentByStatus
)

router.get(
    "//count",
    enrollmentController.countEnrollments
)

router.patch(
    "/:id/grade",
    enrollmentController.updateEnrollmentByGrade
)

router.patch(
    "/:id/status",
    enrollmentController.updateStatus
)

router.delete(
    "/:id/delete",
    enrollmentController.deleteEnrollment
)

router.get(
    "/students/:studentId/history",
    enrollmentController.getHistoryStudents
)

router.get(
    "/subjects/:studentId/students/count",
    enrollmentController.getStudentsBySubject
)


// router.get(
//     "/subjects/:subjectId/average",
//     enrollmentController.getNotesByAverage
// )

export default router;