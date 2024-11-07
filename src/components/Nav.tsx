import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="py-6 mt-8">
      <ul className="flex gap-6 justify-start">
        <li>
          <a href="/" className="hover:underline">Home</a>
        </li>
        <li>
          <Link href="/blog" className="hover:underline">Blog</Link>
        </li>
        <li>
          <a href="#resume" className="hover:underline">Resume</a>
        </li>
      </ul>
    </nav>
  );
}