
import express from "express"
import authMiddleware from "../middlewares/authMiddlewares.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"
import studentController from "../controllers/studentController.js"

const router = express.Router()

router.post(
    "/",
    authMiddleware, adminMiddleware, studentController.createStudent
)

router.get(
    "/",
   authMiddleware, adminMiddleware, studentController.getAllStudents
)

router.get(
    "/:id",
  authMiddleware, adminMiddleware,  studentController.getStudentById
)

router.get(
    "/active/students/active",
   authMiddleware, adminMiddleware, studentController.searchStudentsActives
)

router.get(
    "/:name/students",
   authMiddleware, adminMiddleware, studentController.searchStudentsNames
)

router.get(
    "/count/students/user",
   authMiddleware, adminMiddleware, studentController.countStudents
)

router.put(
    "/:id/update",
   authMiddleware, adminMiddleware, studentController.updateStudent
)

router.patch(
    "/:id/upd",
   authMiddleware, adminMiddleware, studentController.updateStatus
)

router.delete(
    "/:id/delete",
   authMiddleware, adminMiddleware, studentController.deleteStudent
)

export default router;