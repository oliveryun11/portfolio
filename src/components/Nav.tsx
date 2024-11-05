import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="py-6 mt-8">
      <ul className="flex gap-6 justify-start">
        <li>
          <a href="#" className="hover:underline">Home</a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">Contact</a>
        </li>
        <li>
          <a href="#resume" className="hover:underline">Resume</a>
        </li>
      </ul>
    </nav>
  );
}