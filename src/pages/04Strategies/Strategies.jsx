import React, { useState } from "react";
import "./Strategies.css";
import arrowLeft from './assets/images/arrowLeft.svg'
import arrowRight from './assets/images/arrowRight.svg'
import cardimg from "./assets/images/moneycard.svg"

import UserIdentification from '../02UserIdentification/UserIdentification';

const Strategies = () => {

  const [strategy, setStrategy] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  let currentIndex2 = 0;
  const [selectedIndex2, setSelectedIndex2] = useState(null);

//   if (!strategy) {
//     return <UserIdentification setStrategy={setStrategy} />;
//   }

// const cards = strategy;
  

  const getImagePath = (cardImg) => {
    const imagePath = cardImg === cardimg ? cardimg : '';
    return imagePath;
  };


  


    const cards = [
    
        {
          src: getImagePath(cardimg),
          title: 'СОХРАНЕНИЕ СРЕДСТВ',
          description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
          label: 'Мы поможем вам:',
          steps: [
            "Определите, сколько денег вам потребуется для комфортной жизни на пенсии. ",
                "Начните регулярно откладывать деньги на пенсионные счета или в пенсионные фонды.",
                "Используйте налоговые льготы, предусмотренные для пенсионных накоплений. ",
          ]
        },

        {
            src: getImagePath(cardimg),
            title: 'СОХРАНЕНИЕ СРЕДСТВ',
            description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
            label: 'Мы поможем вам:',
            steps: [
              '1',
              '2',
              '3',
              '4',
              '5'
            ]
        },
        {
            src: getImagePath(cardimg),
            title: 'СОХРАНЕНИЕ СРЕДСТВ',
          description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
          label: 'Мы поможем вам:',
          steps: [
            '1',
            '2',
            '3',
            '4',
            '5'
          ]
        },

        {
            src: getImagePath(cardimg),
            title: 'СОХРАНЕНИЕ СРЕДСТВ',
          description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
          label: 'Мы поможем вам:',
          steps: [
            '1',
            '2',
            '3',
            '4',
            '5'
          ]
        },

        {
            src: getImagePath(cardimg),
            title: 'СОХРАНЕНИЕ СРЕДСТВ',
            description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
            label: 'Мы поможем вам:',
            steps: [
              '1',
              '2',
              '3',
              '4',
              '5'
            ]
        },

        {
            src: getImagePath(cardimg),
            title: 'СОХРАНЕНИЕ СРЕДСТВ',
          description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
          label: 'Мы поможем вам:',
          steps: [
            '1',
            '2',
            '3',
            '4',
            '5'
          ]
        },

        {
            src: getImagePath(cardimg),
            title: 'СОХРАНЕНИЕ СРЕДСТВ',
            description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
            label: 'Мы поможем вам:',
            steps: [
              '1',
              '2',
              '3',
              '4',
              '5'
            ]
        },

        {
            src: getImagePath(cardimg),
            title: 'СОХРАНЕНИЕ СРЕДСТВ',
            description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
            label: 'Мы поможем вам:',
            steps: [
              '1',
              '2',
              '3',
              '4',
              '5'
            ]
        },

        {
            src: getImagePath(cardimg),
            title: 'СОХРАНЕНИЕ СРЕДСТВ',
            description: 'Люди, которые сосредоточены на накоплении денег и инвестировании.',
            label: 'Мы поможем вам:',
            steps: [
              '1',
              '2',
              '3',
              '4',
              '5'
            ]
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
    
      const handleCardClick = (index) => {
        if (selectedIndex === index) {
          setSelectedIndex(null);
        } else {
          setSelectedIndex(index);
        }
      };
    
      const updateSliderPosition = () => {
        const targetIndex = currentIndex * 1465;
        
        document.getElementById('slider').style.left = `${-targetIndex}px`;

      };



      function generateLiElements(steps) {
        return steps.map((step, index) => <li key={index}>{step}</li>);
      }



// slider2


const handleLeftArrowClick2 = () => {
  currentIndex2 = (currentIndex2 === 0) ? cards.length - 1 : currentIndex2 - 1;
  updateSliderPosition2();
};

const handleRightArrowClick2 = () => {
  currentIndex2 = (currentIndex2 === cards.length - 1) ? 0 : currentIndex2 + 1;
  updateSliderPosition2();
};

const handleCardClick2 = (index) => {
  if (selectedIndex2 === index) {
    setSelectedIndex2(null);
  } else {
    setSelectedIndex2(index);
  }
};

const updateSliderPosition2 = () => {
  const targetIndex2 = currentIndex2 * 1465;
  
  document.getElementById('slider2').style.left = `${-targetIndex2}px`;
};

function generateLiElements2(steps) {
  return steps.map((step, index) => <li key={index}>{step}</li>);
}



      
      
      return (
      
      <section className="section strategy">
        
          
          <div className="main__title">
            <h1 className="h1grin">FINANCE</h1>
            <h1 className="h1white">STRATEGY</h1>
          </div>

      <section className="card-type"> 
      <div className="not-main-title"><h3>Основанная на вашем типе:</h3></div>
      
          
        <div className="sectionSlider">
          
          <div className="arrows">
            <button
              onClick={handleLeftArrowClick}
              className={`arrow left ${currentIndex === 0 ? 'disabled' : ''}`}
            >
              <img src={arrowLeft} alt="arrow left" />
            </button>
            <button
              onClick={handleRightArrowClick}
              className={`arrow right ${currentIndex === cards.length - 1 ? 'disabled' : ''}`}
            >
              <img src={arrowRight} alt="arrow right" />
            </button>
          </div>
          
          <ul className="slider" id="slider" >




          {cards.map((card, index) => (
            <li
              key={index}
              // className={`strategy__card ${selectedIndex === index ? 'selected' : ''}`}
              onClick={() => handleCardClick(index)}
            >

  


      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="strategy__card-image" src={card.src} alt="" />
                <span className="strategy__card-title">{card.title}</span>
                <span className="strategy__card-description">{card.description}</span>
                <button id="flip-button" className="button__frontCard">Подробнее</button>
            </div>
            

            
            <div className="flip-card-back">
              <div className="flip-card-back__inner">
                <div className="container">
                  <div className="help__title">
                    <span >Мы поможем вам</span>
                  </div>
                  <span className="strategy__back-title">{card.title}</span>
                  <ul className="strategy__li">
                    {generateLiElements(card.steps)}
                  </ul>
                </div>
              </div>
              <button className="button__backCard">Назад</button>
            </div>
        </div>
    </div>
  </li>
            ))}

           
          </ul>
          


          
        </div>
        
        
      </section>




<hr className="Big-hr"></hr>


<section className="card-answer"> 
  <div className="not-main-title"><h3>Основанная на вашем типе:</h3></div>
  
  <div className="sectionSlider2">
    <div className="arrows2">
      <button
        onClick={handleLeftArrowClick2}
        className={`arrow2 left2 ${currentIndex2 === 0 ? 'disabled' : ''}`}
      >
        <img src={arrowLeft} alt="arrow left" />
      </button>
      <button
        onClick={handleRightArrowClick2}
        className={`arrow2 right2 ${currentIndex2 === cards.length - 1 ? 'disabled' : ''}`}
      >
        <img src={arrowRight} alt="arrow right" />
      </button>
    </div>
    
    <ul className="slider2" id="slider2" >
      {cards.map((card, index) => (
        <li
          key={index}
          onClick={() => handleCardClick2(index)}
        >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="strategy__card-image" src={card.src} alt="" />
                <span className="strategy__card-title">{card.title}</span>
                <span className="strategy__card-description">{card.description}</span>
                <button id="flip-button" className="button__frontCard">Подробнее</button>
              </div>
              
              <div className="flip-card-back">
                <div className="flip-card-back__inner">
                  <div className="container">
                    <div className="help__title">
                      <span >Мы поможем вам</span>
                    </div>
                    <span className="strategy__back-title">{card.title}</span>
                    <ul className="strategy__li">
                      {generateLiElements2(card.steps)}
                    </ul>
                  </div>
                </div>
                <button className="button__backCard">Назад</button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div> 

      </section>
      </section>






      );
    };

export default Strategies;
