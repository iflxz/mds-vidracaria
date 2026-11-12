
import {
  ShieldCheck,
  Ruler,
  Sparkles,
  Headset,
} from "lucide-react";

import "./WhyChooseUs.css";

const benefits = [
  {
    icon: Ruler,
    title: "Projetos sob medida",
    description:
      "Soluções planejadas de acordo com as necessidades e características de cada ambiente.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade e segurança",
    description:
      "Atenção à escolha dos materiais e aos detalhes de cada instalação.",
  },
  {
    icon: Sparkles,
    title: "Acabamento cuidadoso",
    description:
      "Capricho em cada detalhe para entregar um resultado bonito e funcional.",
  },
  {
    icon: Headset,
    title: "Atendimento próximo",
    description:
      "Acompanhamento e atenção desde o primeiro contato até a conclusão do projeto.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-us" id="sobre">
      <div className="why-us-container">
        <div className="why-us-heading">
          <span className="section-tag">NOSSO DIFERENCIAL</span>

          <h2>
            Mais que vidro,
            <span> confiança em cada detalhe.</span>
          </h2>

          <p>
            Cada ambiente merece uma solução especial.
            Trabalhamos para unir estética, funcionalidade
            e atenção em cada projeto.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
