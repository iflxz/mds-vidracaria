
import { useState, useEffect, useRef, type CSSProperties } from "react";
import "./Process.css";
import { PROCESS } from "../data/site";

function Process() {
  const [active, setActive] = useState(0);

  const processRef = useRef<HTMLElement | null>(null);
  const processListRef = useRef<HTMLOListElement | null>(null);

  const progress = active / (PROCESS.length - 1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 550px)");

    const updateActiveStep = () => {
      if (!mediaQuery.matches) return;

      const section = processRef.current;
      const list = processListRef.current;

      if (!section || !list) return;

      const sectionRect = section.getBoundingClientRect();
      const screenCenter = window.innerHeight / 2;

      if (
        sectionRect.top > screenCenter ||
        sectionRect.bottom < screenCenter
      ) {
        return;
      }

      const steps = Array.from(list.querySelectorAll("li"));

      let closestIndex = 0;
      let smallestDistance = Infinity;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const stepCenter = (rect.top + rect.bottom) / 2;
        const distance = Math.abs(stepCenter - screenCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    };

    window.addEventListener("scroll", updateActiveStep, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveStep);

    updateActiveStep();

    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  return (
    <section
      className="process"
      id="como-funciona"
      ref={processRef}
    >
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
          ref={processListRef}
          style={{ "--progress": progress } as CSSProperties}
        >
          {PROCESS.map((step, i) => (
            <li
              key={step.title}
              className={
                i === active
                  ? "is-active"
                  : i < active
                    ? "is-done"
                    : ""
              }
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
