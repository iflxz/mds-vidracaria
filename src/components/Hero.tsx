import { Gem, Handshake, MapPin, ShieldCheck } from "lucide-react";
import "./Hero.css";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "../utils/whatsapp";

const TRUST = [
  { icon: ShieldCheck, label: "Instalação Profissional" },
  { icon: Gem, label: "Acabamento de Alto Padrão" },
  { icon: Handshake, label: "Atendimento Personalizado" },
  { icon: MapPin, label: "Atendemos Curitiba e Região" },
];

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-image">
        <img
          src="/images/hero.webp"
          alt="Box de vidro com perfil dourado em banheiro de mármore"
          width={1086}
          height={1448}
          fetchPriority="high"
        />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Qualidade, design e segurança em
            <span> cada detalhe.</span>
          </h1>

          <p>
            Soluções em vidros para sua casa, comércio ou empresa, com
            instalação profissional e acabamento impecável.
          </p>

          <div className="hero-actions">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              <WhatsAppIcon size={20} />
              Solicite um orçamento
            </a>
            <a href="#servicos" className="hero-link">
              Conheça nossos serviços
            </a>
          </div>

          <ul className="hero-trust">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
