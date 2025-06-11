import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="py-6 mt-8">
      <ul className="flex gap-6 justify-start text-foreground-secondary">
        <li>
          <Link href="/" className="hover:text-foreground">Home</Link>
        </li>
        <li>
        <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}