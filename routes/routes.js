// routes.js

import express from "express";
import {
  getEstudantes,
  createEstudante,
  updateEstudante,
  deleteEstudante,
} from "../controllers/estudanteController.js";

const router = express.Router();

// Rotas para Estudantes
router.get("/", getEstudantes);
router.post("/", createEstudante);
router.put("/:id", updateEstudante);
router.delete("/:id", deleteEstudante);

export default router;
