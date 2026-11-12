
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "../utils/whatsapp";
import "./BudgetForm.css";

function BudgetForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message =
      `Olá! Meu nome é ${name.trim()}.\n` +
      `Tenho interesse em: ${service}.\n` +
      `Detalhes do projeto: ${details.trim() || "Gostaria de conversar sobre o orçamento."}`;

    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  }

  return (
    <section className="budget-form" id="orcamento">
      <div className="budget-container">
        <div className="budget-info">
          <span className="section-tag">VAMOS CONVERSAR?</span>

          <h2>
            Seu projeto começa
            <span> com uma conversa.</span>
          </h2>

          <p>
            Conte um pouco sobre o que você precisa.
            Nossa equipe poderá conversar com você
            e entender melhor seu projeto.
          </p>

          <div className="budget-contact">
            <WhatsAppIcon size={24} />
            <div>
              <strong>Atendimento pelo WhatsApp</strong>
              <span>Envie sua solicitação diretamente para nós.</span>
            </div>
          </div>
        </div>

        <form className="budget-card" onSubmit={handleSubmit}>
          <h3>Solicite seu orçamento</h3>
          <p>Preencha os campos abaixo para começar.</p>

          <label htmlFor="budget-name">Seu nome</label>
          <input
            id="budget-name"
            type="text"
            placeholder="Digite seu nome"
            autoComplete="name"
            minLength={2}
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="budget-service">Qual serviço procura?</label>
          <select
            id="budget-service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            required
          >
            <option value="">Selecione um serviço</option>
            <option value="Box para banheiro">Box para banheiro</option>
            <option value="Espelhos">Espelhos</option>
            <option value="Guarda-corpos">Guarda-corpos</option>
            <option value="Portas e divisórias">Portas e divisórias</option>
            <option value="Outro serviço">Outro</option>
          </select>

          <label htmlFor="budget-details">
            Conte um pouco sobre seu projeto
          </label>
          <textarea
            id="budget-details"
            placeholder="Ex.: Preciso de um box para banheiro..."
            rows={4}
            value={details}
            onChange={(event) => setDetails(event.target.value)}
          />

          <button type="submit">
            Enviar pelo WhatsApp
            <ArrowRight size={19} />
          </button>

          <span className="budget-disclaimer" role="status">
            {sent && "Abrimos o WhatsApp em outra aba. Se não abriu, tente de novo. "}
            Você será direcionado ao WhatsApp para enviar sua solicitação.
          </span>
        </form>
      </div>
    </section>
  );
}

export default BudgetForm;
