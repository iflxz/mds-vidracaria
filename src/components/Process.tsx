import { useState, type CSSProperties } from "react";
import "./Process.css";
import { PROCESS } from "../data/site";

function Process() {
  const [active, setActive] = useState(0);
  const progress = active / (PROCESS.length - 1);

  return (
    <section className="process" id="como-funciona">
      <div className="process-container">
        <div className="process-heading">
          <span className="section-tag">COMO FUNCIONA</span>
          <h2>
            Do primeiro contato
            <span> à instalação.</span>
          </h2>
        </div>

        <ol
          className="process-list"
          style={{ "--progress": progress } as CSSProperties}
        >
          {PROCESS.map((step, i) => (
            <li
              key={step.title}
              className={i === active ? "is-active" : i < active ? "is-done" : ""}
              onClick={() => setActive(i)}
            >
              <button
                type="button"
                className="step-dot"
                aria-label={`Etapa ${i + 1}: ${step.title}`}
                aria-current={i === active ? "step" : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(i);
                }}
              >
                {i + 1}
              </button>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
