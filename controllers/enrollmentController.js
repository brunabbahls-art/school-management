import { ExplainableCursor } from "mongodb"
import Enrollment from "../models/Enrollment.js"
import enrollmentService from "../services/enrollmentService.js"

const createEnrollment = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.createEnrollment(req.body)

        res.status(201).json({
            message: "Inscrição criada com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}
const getAllEnrollments = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.getAllEnrollments()

        res.status(200).json({
            message: "Inscrição mostrada com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}

const getEnrollmentById = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.getEnrollmentById(req.params.id)

        res.status(200).json({
            message: "Inscrição mostrada com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}

const getEnrollmentByStudentId = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.getEnrollmentByStudentId/(req.params.studentId)

        res.status(200).json({
            message: "Inscrição mostrada com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}

const getEnrollmentBySubjectId = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.getEnrollmentBySubjectId(req.params.subjectId)

        res.status(200).json({
            message: "Inscrição mostrada com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}

const getEnrollmentByStatus = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.getEnrollmentByStatus(req.params.status)

        res.status(200).json({
            message: "Inscrição mostrada com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}

const countEnrollments = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.countEnrollments()

        res.status(200).json({
            message: "Inscrição mostrada com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}

const updateGrade = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.updateGrade( req.body.id)

        return res.status(200).json(enrollment)
    } catch (error) {
        next(error)
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.updateStatus( req.body.id)
        return res.status(200).json ({
            data: enrollment
     } )
    } catch (error) {
        next(error)
    }
}


const deleteEnrollment = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.deleteSubject(req.params.id)

        res.status(200).json({
            message: "Assunto deletado com sucesso",
            data: enrollment,
        })
    } catch (error) {
        next(error)
    }
}


export default {
    createEnrollment,
    getAllEnrollments,
    getEnrollmentById,
    getEnrollmentByStudentId,
    getEnrollmentBySubjectId,
    getEnrollmentByStatus,
    countEnrollments,
    updateGrade,
    updateStatus,
    deleteEnrollment
}