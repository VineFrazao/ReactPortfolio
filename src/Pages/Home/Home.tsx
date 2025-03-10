import React from "react";

import "./styles.less";

import eu from "../../assets/eu.png";
import CardCarousel from "../../components/Carrossel/CardCarrossel";

const skillsData = [
  {
    title: "Javascript",
    color: "#05FA6C",
  },
  {
    title: "React",
    color: "#05FA19",
  },
  {
    title: "Php",
    color: "#44B90C",
  },
];

function Home() {
  return (
    <div>
      <div className="containerHome">
        <div className="textHome">
          <h1>Olá, eu meu nome é Vinícius</h1>
          <p>
            Sou um profissional dinâmico e comunicativo, com forte interesse e
            conhecimento em tecnologia. Tenho facilidade em me adaptar a
            diferentes ambientes de trabalho e equipes, o que me permitiu
            adquirir experiência em diversos contextos profissionais. Possuo
            grande empatia, e sou comprometido com o trabalho em equipe, sempre
            disposto a colaborar e apoiar colegas na busca por soluções
            eficazes. Minha dedicação é uma característica fundamental que me
            acompanham em todas as minhas atividades profissionais.
          </p>
          <button>Download CV</button>
        </div>
        <div>
          <img src={eu} alt="Foto perfil" className="perfil" />
        </div>
      </div>
      <CardCarousel />
      <div className="containerSkills">
        {skillsData.map((skills) => (
          <h1 style={{ color: skills.color }}>{skills.title}</h1>
        ))}
      </div>
    </div>
  );
}

export default Home;
