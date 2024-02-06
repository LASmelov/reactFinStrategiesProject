import React, { useState } from "react";
import "./style02.css";
import cardimg from './assets/images/Growth.png'
import arrow1 from './assets/images/Vector 8.svg'
import arrow2 from './assets/images/Vector 9.svg'
// import {student} from '../04Strategies/data'
import { student, youngProfessionals } from '../04Strategies/data';
// import Strategies from '../04Strategies/Strategies';


const UserIdentification = ({ setStrategy }) => {





  const [selectedIndex, setSelectedIndex] = useState(null);

  const getImagePath = (cardImg) => {
    const imagePath = cardImg === cardimg ? cardimg : '';
    return imagePath;
  };
  
  

  // const data = JSON.stringify(student);
 
 const [selectedCard, setSelectedCard] = useState(null);

const [merged, setMerged] = useState([]);



const handleCardClick = (title) => {


  

  if (selectedCard) {
    const matchingCard = selectedCard.map((card) => card.title);
    // Ищем карту по title
    if (matchingCard.includes('student')) {
      console.log(JSON.stringify(student));
      // Объединяем текущее состояние merged с объектом student
      setMerged((prevState) => [...prevState, {student}]);
      console.log(JSON.stringify(merged));
    }
  } else {
    console.log('selectedCard is null or undefined');
  }

const strategies = { student, youngProfessionals };
  const selectedStrategy = strategies[title];
  

setStrategy(selectedStrategy);

 
}
// 





  //





 
    const cards = [

        {
          src: getImagePath(cardimg),
          title: 'youngProfessionals',
          description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
        },

        {
          src: getImagePath(cardimg),
          title: 'student',
          description: 'Студенты старших классов школ и университетов, которые могут иметь ограниченный доход и расходы, связанные с обучением, арендой жилья и питанием. ',
        },
        {
          src: getImagePath(cardimg),
          title: 'МОЛОДОЙ ПРОФЕССИОНАЛ',
          description: 'Люди, работающие на полную ставку или совмещающие работу со студенческими занятиями.',
        },

        {
          src: getImagePath(cardimg),
          title: 'САМОЗАНЯТЫЙ',
          description: 'Предприниматели и фрилансеры, которые работают на себя и могут иметь нестабильный доход. ',
        },

        {
          src: getImagePath(cardimg),
          title: 'ЗАЕМЩИК',
          description: 'Люди, у которых есть значительные долги, имеющие высокий уровень кредитного долга. Они нуждаются в помощи по управлению долгами, составлении бюджета и погашении кредитов.',
        },

        {
          src: getImagePath(cardimg),
          title: 'МОЛОДОЙ РОДИТЕЛЬ',
          description: 'Люди в возрасте от 20 до 35 лет, у которых есть дети. В этом классе присутствуют дополнительные финансовые обязательства, связанные с уходом за детьми',
        },

        {
          src: getImagePath(cardimg),
          title: 'БЕЗ ДОХОДА',
          description: 'Люди, которые не имеют стабильного дохода, таких как безработные или те, кто полностью зависит от поддержки от родителей или государственных программ. ',
        },

        {
          src: getImagePath(cardimg),
          title: 'ПОДРОСТОК',
          description: 'Люди, которые еще не достигли совершеннолетия.Они могут зависеть от своих родителей или опекунов для финансовой поддержки и могут иметь ограниченные возможности для работы или заработка.',
        },

        {
          src: getImagePath(cardimg),
          title: 'ПЕНСИОНЕР',
          description: 'Класс включает людей, которые достигли пенсионного возраста и больше не работают на полную ставку. ',
        },
      
      ];
    
      let currentIndex = 0;
    
      const handleLeftArrowClick = () => {
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        updateSliderPosition();
      };
    
      const handleRightArrowClick = () => {
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        updateSliderPosition();
      };

      const updateSliderPosition = () => {
        const targetIndex = currentIndex * 1465;
        
        document.getElementById('slider').style.left = `${-targetIndex}px`;

      };
    
      
      return (
      
      <section className="sliderall">
        
          
          <h1>Выберите ваш тип</h1>
        
          
        <div className="sectionSlider">
          
          <div className="arrows">
            <button
              onClick={handleLeftArrowClick}
              className={`arrow left ${currentIndex === 0 ? 'disabled' : ''}`}
            >
              <img src={arrow1} alt="arrow left" />
            </button>
            <button
              onClick={handleRightArrowClick}
              className={`arrow right ${currentIndex === cards.length - 1 ? 'disabled' : ''}`}
            >
              <img src={arrow2} alt="arrow right" />
            </button>
          </div>
          
          <ul className="slider" id="slider" >

            
          {cards.map((card, index) => (
                <li
                  key={index}
                  className={`card ${selectedIndex === index ? 'selected' : ''}`}
                >
                <h4>{card.title}</h4>
                <img src={card.src} alt={card.title} />
                <hr></hr>
                <h5>{card.description}</h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttonresult">
          <button onClick={() => handleCardClick(cards.title)} >Применить стратегию</button>
        </div>


     
        
      </section>
      );
    };

export default UserIdentification;
