
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import "./Header.css";
import { whatsappLink } from "../utils/whatsapp";

const LINKS = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre nós" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "orcamento", label: "Orçamento" },
];

function Header() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-container">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#5cd0e3" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
            <rect x="4" y="21" width="9" height="15" rx="1" fill="rgba(92,208,227,.18)" />
            <rect x="15" y="11" width="9" height="25" rx="1" fill="rgba(92,208,227,.3)" />
            <rect x="26" y="3" width="9" height="33" rx="1" fill="rgba(92,208,227,.45)" />
          </svg>
          <div className="logo-text">
            <strong>MDS</strong>
            <small>VIDRAÇARIA</small>
          </div>
        </a>

        <nav aria-label="Principal" className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "true" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          className="header-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={19} />
          Solicitar orçamento
        </a>

        <button
          className="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
