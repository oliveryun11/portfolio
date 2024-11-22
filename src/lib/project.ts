import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        id: 'clip',
        title: "Contrastive Language-Image Pre-Training",
        description: 'Implemented a smaller-scale CLIP-like model based on the paper "Learning Transferable Visual Models From Natural Language Supervision".',
        technologies: ["PyTorch", "Python", "Transformers", "Pandas"],
        blogPosts: ["clip-dataset"],
        githubLink: "https://github.com/oliveryun11/clip"
    },
    {
        id: 'bart-synopsis',
        title: "Anime Synopsis Generator",
        description: "A Bidirectional Auto-Regressive Transformer model that generates anime synopses based on genre inputs. Achieved a cross-entropy loss of 0.023 using the PyTorch and the transformers library.",
        technologies: ["PyTorch", "Python", "Transformers", "Pandas"],
        githubLink: "https://github.com/oliveryun11/anime-synopsis",
    },
    {
        id: 'poker-bots',
        title: "Poker Bots",
        description: "Built bankroll logging to AWS s3 for frontend livestreaming and optimized the matchmaking algorithm for the CMU DSC PokerAI competition.",
        technologies: ["Python", "AWS"],
        websiteLink: "https://poker.cmudsc.com"
    },
    {
        id: 'meta-learning',
        title: "Meta-Learning Based Water-Level Prediction",
        description: "A novel meta-learning approach for water-level prediction, achieving 65.81% lower mean squared error compared to traditional LSTM models. Published in IEEE Big Data Conference 2022.",
        technologies: ["Python", "PyTorch", "LSTM", "Meta-Learning"],
        githubLink: "https://github.com/oliveryun11/mewp",
        paperLink: "https://doi.org/10.1109/BigData55660.2022.10020854"
    },
    {
        id: 'portfolio',
        title: "Portfolio Website",
        description: "My personal portfolio website built with Next.js, TypeScript, and TailwindCSS. Features a blog, project showcase, and responsive design.",
        technologies: ["Next.js", "TypeScript", "TailwindCSS"],
        githubLink: "https://github.com/oliveryun11/portfolio",
    }
];

export function getProject(id: string): Project | null {
    return projects.find(project => project.id === id) || null;
}

export function getAllProjects(): Project[] {
    return projects;
}