import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="py-6 mt-8">
      <ul className="flex gap-6 justify-start text-foreground-secondary">
        <li>
          <a href="/" className="hover:text-foreground">Home</a>
        </li>
        <li>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
        </li>
        <li>
          <a href="#resume" className="hover:text-foreground">Resume</a>
        </li>
      </ul>
    </nav>
  );
}