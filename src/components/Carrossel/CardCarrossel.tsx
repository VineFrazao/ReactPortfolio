import React, { useState } from "react";
import "./CardCarousel.less";

import javascript from "../../assets/linguagens/javascript.png";
import reactIcon from "../../assets/linguagens/react.png";
import php from "../../assets/linguagens/php.png";
import mysql from "../../assets/linguagens/mysql.png";
import css from "../../assets/linguagens/css.png";

// Dados dos cards - você pode expandir conforme necessário
const cardData = [
  { id: 1, title: "JavaScript", color: "#D1D0A3", icon: javascript },
  { id: 2, title: "React", color: "#76A5AF", icon: reactIcon },
  { id: 3, title: "PHP", color: "#F8F4E8", icon: php },
  { id: 4, title: "SQL", color: "#F0F8E8", icon: mysql },
  { id: 5, title: "CSS", color: "#F8E8E8", icon: css },
];

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = cardData.length;
  const visibleCards = 3;

  const maxIndex = Math.max(0, totalCards - visibleCards);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div className="experience-section">
      <div className="carousel-container">
        <div
          className="card-track"
          style={{
            transform: `translateX(calc(-${
              activeIndex * 100
            }% / ${visibleCards}))`,
          }}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className="carousel-card"
              style={{ backgroundColor: card.color }}
            >
              <div className="card-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <div className="card-title">{card.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            className={`indicator ${idx === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
