import { Citation } from '@/components/Citations';

export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  projectId: string;
  citations?: Citation[];
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: React.ReactNode;
}
