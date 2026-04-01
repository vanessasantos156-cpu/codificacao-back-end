import { Router } from 'express';
const router = Router();

// "Banco de dados" temporário
let pacientes = [
    { id: 1, nome: "João Silva", especialidade: "Cardiologia" }
];

// 1. GET ALL - Listar todos
router.get('/', (req, res) => {
    res.status(200).json(pacientes);
});

// 2. GET BY ID - Buscar por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const paciente = pacientes.find(p => p.id === Number(id));
    if (!paciente) return res.status(404).json({ erro: "Paciente não encontrado" });
    res.json(paciente);
});

// 3. CREATE - Criar novo paciente
router.post('/', (req, res) => {
    const { nome, especialidade } = req.body;
    const novoPaciente = { id: pacientes.length + 1, nome, especialidade };
    pacientes.push(novoPaciente);
    res.status(201).json(novoPaciente);
});

// 4. UPDATE (PATCH) - Atualizar dados parciais
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, especialidade } = req.body;
    const paciente = pacientes.find(p => p.id === Number(id));
    
    if (!paciente) return res.status(404).json({ erro: "Paciente não encontrado" });

    if (nome) paciente.nome = nome;
    if (especialidade) paciente.especialidade = especialidade;

    res.json(paciente);
});

// 5. DELETE - Remover paciente
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    pacientes = pacientes.filter(p => p.id !== Number(id));
    res.status(204).send(); // 204 significa "Sucesso, mas sem conteúdo para retornar"
});

export default router;