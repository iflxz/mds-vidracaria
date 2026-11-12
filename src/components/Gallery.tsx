
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Gallery.css";
import { whatsappLink } from "../utils/whatsapp";

const projects = [
  {
    id: 1,
    title: "Box com vidro verde",
    category: "Box",
    image: "/images/box-verde.webp",
    alt: "Box de vidro verde em banheiro com revestimento claro",
  },
  {
    id: 2,
    title: "Box com perfil dourado",
    category: "Box",
    image: "/images/box-dourado.webp",
    alt: "Box de vidro com perfil dourado em banheiro de mármore",
  },
  {
    id: 3,
    title: "Box de correr preto",
    category: "Box",
    image: "/images/box-preto.webp",
    alt: "Box de correr com perfil preto em banheiro compacto",
  },
  {
    id: 4,
    title: "Espelho lapidado em losangos",
    category: "Espelhos",
    image: "/images/espelho-losango.webp",
    alt: "Parede espelhada com lapidação em losangos",
  },
  {
    id: 5,
    title: "Parede espelhada na varanda",
    category: "Espelhos",
    image: "/images/espelho-sala.webp",
    alt: "Grande parede espelhada em sala integrada ao jardim",
  },
  {
    id: 6,
    title: "Espelho de banheiro com LED",
    category: "Espelhos",
    image: "/images/espelho-banheiro.webp",
    alt: "Espelho com iluminação em banheiro com bancada",
  },
  {
    id: 7,
    title: "Divisória de vidro em escritório",
    category: "Portas e divisórias",
    image: "/images/divisoria-escritorio.webp",
    alt: "Sala de reunião com divisórias de vidro e esquadrias pretas",
  },
  {
    id: 8,
    title: "Fechamento de sacada",
    category: "Janelas e sacadas",
    image: "/images/sacada-vidro.webp",
    alt: "Sacada de prédio fechada com vidro e perfil preto",
  },
  {
    id: 9,
    title: "Janela de vidro",
    category: "Janelas e sacadas",
    image: "/images/janela-preta.webp",
    alt: "Janela de vidro com perfil preto em fachada",
  },
];

const categories = [
  "Todos",
  "Box",
  "Espelhos",
  "Portas e divisórias",
  "Janelas e sacadas",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="gallery" id="projetos">
      <div className="gallery-container">

        <div className="gallery-heading">
          <div>
            <span className="section-tag">NOSSO PORTFÓLIO</span>

            <h2>
              Projetos que inspiram,
              <span> ambientes que encantam.</span>
            </h2>

            <p>
              Confira algumas referências de projetos em vidro
              e inspire-se para transformar seu ambiente.
            </p>
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-contact"
          >
            Faça seu orçamento
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredProjects.map((project) => (
            <article className="gallery-card" key={project.id}>
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                width={900}
                height={620}
              />

              <div className="gallery-card-overlay">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-footer">
          <p>
            Cada projeto é uma nova oportunidade de transformar
            ambientes.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Gallery;
