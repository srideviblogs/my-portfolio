import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-white dark:bg-black shadow z-50">
      <span className="font-bold text-xl">Sridevi Velpula</span>
      <div className="flex space-x-4">
        <Link to="about" smooth duration={500} className="cursor-pointer">About</Link>
        <Link to="projects" smooth duration={500} className="cursor-pointer">Projects</Link>
        <Link to="skills" smooth duration={500} className="cursor-pointer">Skills</Link>
        <Link to="contact" smooth duration={500} className="cursor-pointer">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
