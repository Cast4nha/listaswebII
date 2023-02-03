import express from "express";
import editoraController from "../controllers/editoraController.js";

const router = express.Router();

router
    .get("/editora", AutorController.listarAutores)
    .get("/editora/:id", AutorController.listarAutorPorId)
    .post("/editora", AutorController.cadastrarAutor)
    .put("/editora/:id", AutorController.atualizarAutor)
    .delete("/editora/:id", AutorController.excluirAutor)
    
export default router;
