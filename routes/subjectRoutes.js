import express from "express"
import authMiddleware from "../middlewares/authMiddlewares.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"
import subjectController from "../controllers/subjectController.js"

const router = express.Router()

router.post(
    "/",
    authMiddleware, adminMiddleware, subjectController.createSubject
)

router.get(
    "/",
   authMiddleware, subjectController.getAllSubjects
)

router.get(
    "/:id",
   authMiddleware, adminMiddleware, subjectController.getSubjectsById
)

router.get(
    "/teacher/:teacherId",
   authMiddleware, adminMiddleware, subjectController.getSubjectsByTeacher
)

router.get(
    "/active/wasd",
   authMiddleware, adminMiddleware, subjectController.getSubjectsActive
)

router.get(
    "/hours/:min/:max",
  authMiddleware, adminMiddleware,  subjectController.getSubjectsByHours
)

router.put(
    "/:id",
   authMiddleware, adminMiddleware, subjectController.updateSubject
)

router.patch(
    "/:id",
  authMiddleware, adminMiddleware,  subjectController.updateStatus
)

router.delete(
    "/:id",
   authMiddleware, adminMiddleware, subjectController.deleteSubject
)

export default router;