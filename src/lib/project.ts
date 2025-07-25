import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'kb-qa',
    title: 'Neuro-Symbolic Concept Learning for Compositional Reasoning',
    description:
      'Developed a neuro-symbolic concept learning framework for textual question answering that achieves superior compositional generalization, outperforming the T5 model baseline by 24.56% on multi-step reasoning tasks.',
    technologies: ['PyTorch', 'Python', 'NLP', 'Neuro-Symbolic AI'],
    blogPosts: ['kb-qa'],
    githubLink: 'https://github.com/oliveryun11/kb-qa',
  },
  {
    id: 'feat-viz',
    title: 'Feature Visualization for Mechanistic Interpretability',
    description:
      'Investigated feature representation in AlexNet, providing evidence for the superposition hypothesis by identifying polysemantic neurons that activate for multiple, distinct concepts in a spatially-dependent manner.',
    technologies: [
      'PyTorch',
      'Python',
      'Mechanistic Interpretability',
      'Computer Vision',
    ],
    blogPosts: ['feat-viz'],
    githubLink: 'https://github.com/oliveryun11/feat-viz',
  },
  {
    id: 'docu-rag',
    title: 'Retrieval-Augmented Generation for Documentation Search',
    description:
      'Built a full-stack RAG chat application with automated document processing, Google Gemini embeddings, and ChromaDB vector storage to answer library documentation questions and help with debugging queries.',
    technologies: [
      'Python',
      'React',
      'RAG',
      'FastAPI',
      'ChromaDB',
      'Full-Stack',
    ],
    githubLink: 'https://github.com/oliveryun11/docu-rag',
  },
  {
    id: 'clip',
    title: 'Contrastive Language-Image Pre-Training',
    description:
      'Implemented a smaller-scale CLIP-like model based on the paper "Learning Transferable Visual Models From Natural Language Supervision".',
    technologies: ['PyTorch', 'Python', 'Transformers', 'Pandas'],
    githubLink: 'https://github.com/oliveryun11/clip',
  },
  {
    id: 'bart-synopsis',
    title: 'BART for Synopsis Generation',
    description:
      'A Bidirectional Auto-Regressive Transformer model that generates anime synopses based on genre inputs. Achieved a cross-entropy loss of 0.023 using the PyTorch and the transformers library.',
    technologies: ['PyTorch', 'Python', 'Transformers', 'Pandas'],
    githubLink: 'https://github.com/oliveryun11/anime-synopsis',
  },
  {
    id: 'poker-bots',
    title: 'AI Poker Competition',
    description:
      'Built bankroll logging to AWS S3 for frontend livestreaming and optimized the matchmaking algorithm for the CMU Data Science Club AI Poker Competition.',
    technologies: ['Python', 'AWS'],
    websiteLink: 'https://poker.cmudsc.com',
  },
  {
    id: 'meta-learning',
    title: 'Meta-Learning Based Water-Level Prediction',
    description:
      'A novel meta-learning approach for water-level prediction, achieving 65.81% lower mean squared error compared to traditional LSTM models. Published in IEEE Big Data Conference 2022.',
    technologies: ['Python', 'PyTorch', 'LSTM', 'Meta-Learning'],
    githubLink: 'https://github.com/oliveryun11/mewp',
    paperLink: 'https://doi.org/10.1109/BigData55660.2022.10020854',
  },
];

export function getProject(id: string): Project | null {
  return projects.find(project => project.id === id) || null;
}

export function getAllProjects(): Project[] {
  return projects;
}
