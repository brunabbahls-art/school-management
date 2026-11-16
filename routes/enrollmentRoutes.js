import express from "express"
import enrollmentController from "../controllers/enrollmentController.js"


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

export default router;