import Estudante from "../models/estudantes.js";

// GET - Retorna todos os estudantes
export const getEstudantes = async (req, res) => {
  try {
    const estudantes = await Estudante.findAll();
    res.json(estudantes);
  } catch (err) {
    console.error("Erro ao buscar estudantes:", err);
    res.status(500).json({ error: "Erro interno ao buscar estudantes" });
  }
};

// POST - Cria um novo estudante
export const createEstudante = async (req, res) => {
  const { nome, sobrenome, nota_1, nota_2 } = req.body;
  try {
    const novoEstudante = await Estudante.create({
      nome,
      sobrenome,
      nota_1,
      nota_2,
    });
    res.status(201).json(novoEstudante);
  } catch (err) {
    console.error("Erro ao criar estudante:", err);
    res.status(500).json({ error: "Erro interno ao criar estudante" });
  }
};

// PUT - Atualiza um estudante existente
export const updateEstudante = async (req, res) => {
  const estudanteId = req.params.id;
  const { nome, sobrenome, nota_1, nota_2 } = req.body;
  try {
    const estudante = await Estudante.findByPk(estudanteId);
    if (!estudante) {
      return res.status(404).json({ error: "Estudante não encontrado" });
    }
    estudante.nome = nome;
    estudante.sobrenome = sobrenome;
    estudante.nota_1 = nota_1;
    estudante.nota_2 = nota_2;
    await estudante.save();
    res.json(estudante);
  } catch (err) {
    console.error("Erro ao atualizar estudante:", err);
    res.status(500).json({ error: "Erro interno ao atualizar estudante" });
  }
};

// DELETE - Remove um estudante
export const deleteEstudante = async (req, res) => {
  const estudanteId = req.params.id;
  try {
    const estudante = await Estudante.findByPk(estudanteId);
    if (!estudante) {
      return res.status(404).json({ error: "Estudante não encontrado" });
    }
    await estudante.destroy();
    res.json({ message: "Estudante removido com sucesso" });
  } catch (err) {
    console.error("Erro ao remover estudante:", err);
    res.status(500).json({ error: "Erro interno ao remover estudante" });
  }
};
