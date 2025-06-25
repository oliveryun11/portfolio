import { HiArrowUpRight } from 'react-icons/hi2';

export default function Footer() {
  return (
    <footer className="flex justify-left flex-col items-start gap-6 py-6">
      <ul className="flex flex-row gap-4 text-foreground-secondary">
        <li>
          <a
            className="flex items-center transition-colors duration-200 hover:text-foreground font-medium"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/oliveryun11"
          >
            <HiArrowUpRight className="w-4 h-4" />
            <p className="ml-2">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-colors duration-200 hover:text-foreground font-medium"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:oliveryun11@gmail.com"
          >
            <HiArrowUpRight className="w-4 h-4" />
            <p className="ml-2">Email</p>
          </a>
        </li>
      </ul>
      <div className="text-foreground-secondary pb-4">
        <p>© 2025 Oliver Yun</p>
      </div>
    </footer>
  );
}
