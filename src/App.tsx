import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import BudgetForm from "./components/BudgetForm";
import "./theme.css"; // sempre por último, para sobrepor os CSS dos componentes

function App() {
  // Entrada suave dos cards ao rolar a página (só quando o JS está ativo)
  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    document
      .querySelectorAll(".faq-list details, .service-card, .benefit-card, .budget-card")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Header />

      <main id="conteudo">
        <Hero />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Process />
        <Faq />
        <BudgetForm />
        <Footer />
      </main>
    </>
  );
}

export default App;
