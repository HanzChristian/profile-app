import React, { useState, useEffect } from 'react';
import CardVariant from './CardVariant';
import CopalGumData from './CopalGumData';

const CardDisplayVariant = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? CopalGumData.length - 1 : prevIndex - 1
    );
  };

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === CopalGumData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="work-container-new">
      <div className={`project-container-new ${fadeIn ? 'fade-in' : ''}`}>
        {CopalGumData.map((val, ind) => {
          return (
            <CardVariant
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              visible={ind === currentCardIndex}
              prevCard={prevCard}
              nextCard={nextCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardDisplayVariant;
