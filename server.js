import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "Ok",
        message: "Servidor rodando"
    });
});

app.use("/enrollments", enrollmentRoutes);
app.use("/students", studentRoutes);
app.use("/subjects", subjectRoutes);
app.use("/teachers", teacherRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.use((error, req, res, next) => {
    console.error(error.message);

    res.status(error.statusCode || 500).json({
        error: error.message
    });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`O servidor está rodando na porta: ${PORT}`);
        });
    } catch (error) {
        // Exibe o objeto de erro completo para depuração no Render
        console.error("Erro crítico ao iniciar o servidor:", error);
        process.exit(1);
    }
};

startServer();