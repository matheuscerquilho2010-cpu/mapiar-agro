import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ProposalRecord {
  id: string;
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  cultura: string;
  areaHa: string;
  municipioUf: string;
  servico: string;
  mensagem: string;
  createdAt: string;
  status: string;
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // In-memory proposal store + local JSON file fallback
  const proposalsFile = path.resolve(__dirname, 'mapiar_proposals.json');
  let proposals: ProposalRecord[] = [];
  try {
    if (fs.existsSync(proposalsFile)) {
      proposals = JSON.parse(fs.readFileSync(proposalsFile, 'utf-8'));
    }
  } catch {
    proposals = [];
  }

  // API Health / Status endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'online',
      service: 'MapIar Agricultura de Precisão API',
      timestamp: new Date().toISOString(),
      activeProposals: proposals.length
    });
  });

  // Contact / Proposal endpoint
  app.post('/api/contact', (req, res) => {
    const { nome, empresa, telefone, email, cultura, areaHa, municipioUf, servico, mensagem } = req.body || {};

    const errors: Record<string, string> = {};
    if (!nome || typeof nome !== 'string' || nome.trim().length < 3) {
      errors.nome = 'Por favor, informe seu nome completo.';
    }
    if (!telefone || typeof telefone !== 'string' || telefone.trim().length < 8) {
      errors.telefone = 'Por favor, informe seu telefone ou WhatsApp.';
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Por favor, informe um e-mail válido.';
    }
    if (!municipioUf || typeof municipioUf !== 'string' || municipioUf.trim().length < 2) {
      errors.municipioUf = 'Por favor, informe o município e estado (UF) da propriedade.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Dados incompletos ou inválidos.',
        errors
      });
    }

    const proposalRecord: ProposalRecord = {
      id: `MAP-${Date.now().toString(36).toUpperCase()}`,
      nome: nome.trim(),
      empresa: typeof empresa === 'string' ? empresa.trim() : '',
      telefone: telefone.trim(),
      email: email.trim(),
      cultura: typeof cultura === 'string' ? cultura.trim() : 'Geral',
      areaHa: typeof areaHa === 'string' ? areaHa.trim() : '',
      municipioUf: municipioUf.trim(),
      servico: typeof servico === 'string' && servico.trim() ? servico.trim() : 'Mapeamento Geral',
      mensagem: typeof mensagem === 'string' ? mensagem.trim() : '',
      createdAt: new Date().toISOString(),
      status: 'recebido'
    };

    proposals.push(proposalRecord);
    try {
      fs.writeFileSync(proposalsFile, JSON.stringify(proposals, null, 2), 'utf-8');
    } catch (err) {
      console.error('Erro ao salvar proposta MapIar:', err);
    }

    return res.status(201).json({
      success: true,
      message: 'Mensagem recebida com sucesso! O Engenheiro Agrônomo da MapIar retornará com a análise técnica e orçamento.',
      proposalId: proposalRecord.id,
      receivedAt: proposalRecord.createdAt
    });
  });

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MapIar server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
