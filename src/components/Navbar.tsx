import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/" className="hover:text-blue-400">Início</Link>
      <Link to="/about" className="hover:text-blue-400">Sobre</Link>
      <Link to="/projects" className="hover:text-blue-400">Projetos</Link>
      <Link to="/contact" className="hover:text-blue-400">Contato</Link>
    </nav>
  );
}
