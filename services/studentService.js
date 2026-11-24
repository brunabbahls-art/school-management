import Student from "../models/Student.js";

const createStudent = async (data) => {
    const { nome, email, idade, telefone, matricula } = data

    if (!nome || !email || !idade || !telefone ) {
        const error = new Error("O nome e o email são obrigatórios")
        error.statuscode = 400
        throw error
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        const error = new Error("O email já foi utilizado")
        error.statusCode = 400
        throw error
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        nome,
        email,
        password: hashedPassword,
        telefone,
        role: "student",
        ativo: true
    })
    try {
        const student = await Student.create({
            userId: user._id,
            idade,
            matricula,
            ativo: true
        })
        return Student.findById(teacher._id)
            .populate("userId", "nome email")

    } catch (error) {
        await User.findByIdAndDelete(user._id)
        throw error
    }
}

const getAllStudents = async () => {
    return Student.find()
        .populate("userId", "nome email")
}

const getStudentById = async (id) => {
    const student = await Student.findById(id)
        .populate("userId", "nome email")

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const searchStudentsActives = async (ativo) => {
    const student = await Student.find({
        ativo: true,
    })
        .populate("userId", "nome email")
    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const searchStudentsNames = async (nome) => {
    const student = await Student.find({
        nome
    })
        .populate("userId", "nome email")
    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const countStudents = async () => {
    return Student.countDocuments()
}

const updateStudent = async (id, data) => {
    const { nome, email, idade, matricula } = data
    const student = await Student.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    });

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const updateStatus = async (id, data) => {
    const student = await Student.findByIdAndUpdate(id, data)

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const deleteStudent = async (id) => {
    const student = await Student.findByIdAndDelete(id)

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

export default {
    createStudent,
    getAllStudents,
    getStudentById,
    searchStudentsActives,
    searchStudentsNames,
    countStudents,
    updateStudent,
    updateStatus,
    deleteStudent
}