
import { ArrowUpRight } from "lucide-react";
import "./Services.css";
import { whatsappLink } from "../utils/whatsapp";
import { SERVICES } from "../data/site";


function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services-container">

        <div className="services-heading">
          <span className="section-tag">O QUE FAZEMOS</span>

          <h2>
            Soluções em vidro para
            <span> cada ambiente.</span>
          </h2>

          <p>
            Trabalhamos com soluções personalizadas em vidro,
            unindo funcionalidade, qualidade e beleza.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>

              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  width={800}
                  height={560}
                />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href={whatsappLink(`Olá! Tenho interesse em ${service.title} e gostaria de solicitar um orçamento.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  Solicitar orçamento
                  <ArrowUpRight size={18} />
                </a>
              </div>

            </article>
          ))}
        </div>

        <div className="services-bottom">
          <p>Não encontrou o que procura?</p>

          <a
            href={whatsappLink("Olá! Não encontrei o que procuro no site e gostaria de conversar com a equipe.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com nossa equipe
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;
