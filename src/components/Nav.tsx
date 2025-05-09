import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="py-6 mt-8">
      <ul className="flex gap-6 justify-start text-foreground-secondary">
        <li>
          <Link href="#about" className="hover:text-foreground">About</Link>
        </li>
        <li>
          <Link href = "#projects" className="hover:text-foreground">Projects</Link>
        </li>
        {/*
        <li>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
        </li>
        */}
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