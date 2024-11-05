import { HiArrowUpRight } from "react-icons/hi2";

export default function Footer() {
    return (
        <footer className="flex justify-left flex-col items-start gap-6 py-6">
            <ul className="flex flex-row gap-4">
                <li>
                    <a
                        className="flex items-center transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/oliveryun11"
                    > 
                        <HiArrowUpRight className="w-4 h-4"/>
                        <p className="ml-2">github</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:oliveryun11@gmail.com"
                    >
                        <HiArrowUpRight className="w-4 h-4"/>
                        <p className="ml-2">email</p>
                    </a>
                </li>
            </ul>
            <div>
                <p>© 2024 Oliver Yun</p>
            </div>
        </footer>
    )
}
