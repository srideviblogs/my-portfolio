import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black shadow p-4 flex justify-between">
      <span className="font-bold">[Your Name]</span>
      <div className="space-x-4">
        <Link to="about" smooth>About</Link>
        <Link to="projects" smooth>Projects</Link>
        <Link to="skills" smooth>Skills</Link>
        <Link to="contact" smooth>Contact</Link>
      </div>
    </nav>
  );
}
