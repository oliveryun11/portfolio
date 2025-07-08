'use client';

import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

export interface Citation {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue?: string;
  url?: string;
  doi?: string;
}

interface CitationsProps {
  citations: Citation[];
}

function formatAuthors(authors: string[]): string {
  if (authors.length <= 2) {
    return authors.join(' & ');
  }
  return `${authors[0]} & ${authors[1]} et al.`;
}

export function Citations({ citations }: CitationsProps) {
  return (
    <div className="mt-8 border-t border-border pt-8" id="references">
      <h2>References</h2>
      <ol className="list-decimal list-inside space-y-4 mt-4">
        {citations.map((citation, index) => (
          <li
            key={citation.id}
            id={`ref-${index + 1}`}
            className="text-sm text-foreground-secondary"
          >
            {formatAuthors(citation.authors)} ({citation.year}).{' '}
            {citation.title}. {citation.venue && <em>{citation.venue}</em>}.{' '}
            {(citation.url || citation.doi) && (
              <Link
                href={
                  citation.doi
                    ? `https://doi.org/${citation.doi}`
                    : citation.url!
                }
                className="inline-flex items-center hover:text-foreground transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {citation.doi ? 'DOI' : 'Link'}
                <HiArrowUpRight className="w-3 h-3 ml-1" />
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

// Helper component for in-text citations
export function Cite({ n }: { n: number }) {
  return (
    <Link
      href={`#ref-${n}`}
      className="text-foreground-secondary hover:text-foreground transition-colors duration-200"
    >
      [{n}]
    </Link>
  );
}
