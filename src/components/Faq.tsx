import "./Faq.css";
import { FAQ } from "../data/site";

function Faq() {
  return (
    <section className="faq" id="duvidas">
      <div className="faq-container">
        <div className="faq-heading">
          <span className="section-tag">DÚVIDAS FREQUENTES</span>
          <h2>
            Antes de pedir seu orçamento,
            <span> veja o que mais perguntam.</span>
          </h2>
        </div>

        <div className="faq-list">
          {FAQ.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
