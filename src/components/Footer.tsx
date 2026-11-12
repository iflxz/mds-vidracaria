import {
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import "./Footer.css";
import InstagramIcon from "./InstagramIcon";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "../utils/whatsapp";
import { SITE } from "../data/site";

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo">
              MDS<span>VIDRAÇARIA</span>
            </a>

            <p>
              Soluções em vidro sob medida para transformar
              ambientes com elegância, qualidade e cuidado.
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
            >
              Solicitar orçamento
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="footer-links">
            <h3>Navegação</h3>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#orcamento">Orçamento</a>
          </div>

          <div className="footer-contact">
            <h3>Entre em contato</h3>

            <p>
              <MapPin size={18} />
              {SITE.city}
            </p>

            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} />
              WhatsApp {SITE.phoneDisplay}
            </a>

            {SITE.instagram && (
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={18} />
                Instagram
              </a>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MDS Vidraçaria. Todos os direitos reservados.</p>
          <span>{SITE.city}</span>
        </div>
      </div>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Falar pelo WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>
    </footer>
  );
}

export default Footer;
