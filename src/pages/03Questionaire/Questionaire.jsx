import React, { useState } from 'react';
import arrowLeft from './assets/images/arrowLeft.png';
import arrowRight from './assets/images/arrowRight.png';
import './style03.css';
import {strategiesForPriorities} from '../04Strategies/data'


const Questionaire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [scores, setScores] = useState({
    saveup: 0,
    save: 0,
    invest: 0,
    neutral: 0,
    insured: 0
  });
  const slides = [
    {
      "q": "Какого рода финансовые цели у вас преобладают в данный момент?",
      "saveup": "Накопление на крупные покупки",
      "invest": "Инвестирование для получения высокого дохода",
      "save": "Сохранение стабильного дохода",
      "neutral": "Поддержание финансовой стабильности в случае неожиданных расходов",
    },
    {
      "q": "Какую долю дохода вы готовы выделять на накопления или инвестирование каждый месяц?",
      "save": "Менее 10%",
      "saveup": "10-20%",
      "invest": "20-30%",
      "invest": "Более 30%",
      "neutral": "Не готов инвестировать",
    },
    {
      "q": "Какие сроки вы готовы выделять для достижения ваших финансовых целей?",
      "save": "Краткосрочные (до 1 года)",
      "saveup": "Среднесрочные (1-5 лет)",
      "invest": "Долгосрочные (более 5 лет)",
    },
    {
      "q": "У вас есть финансовые обязательства, такие как кредиты или ипотека?",
      "save": "Да",
      "saveup": "Нет",
    },
    {
      "q": "Какое значение имеет для вас образование и готовы ли вы инвестировать в свою учебу или профессиональное развитие?",
      "invest": "Высокое значение, готов инвестировать",
      "invest": "Среднее значение, возможно инвестирование",
      "save": "Низкое значение, не готов инвестировать",
    },
    {
      "q": "Какой у вас уровень финансовой грамотности?",
      "invest": "Высокий уровень, понимаю принципы инвестирования и управления финансами",
      "neutral": "Средний уровень, некоторое представление о финансовых инструментах",
      "save": "Низкий уровень, нуждаюсь в основных знаниях о финансах",
    },
    {
      "q": "Какую роль играют налоги в вашем финансовом планировании?",
      "invest": "Они играют важную роль, активно ищу способы минимизации налогов",
      "neutral": "Они имеют некоторое значение, пытаюсь оптимизировать налогообложение",
      "save": "Они не играют никакую роль, не обращаю на них особого внимания",
    },
    {
      "q": "Какую роль играет риск в ваших финансовых решениях?",
      "invest": "Я готов пойти на значительный риск для получения высоких доходов",
      "saveup": "Я предпочитаю средний уровень риска",
      "save": "Я предпочитаю более консервативные решения, чтобы избегать потерь",
      "insured": "Я не рискую",
    },
    {
      "q": "Как вам кажется, насколько важно иметь четкий план на будущее для достижения финансовых целей?",
      "saveup": "Это крайне важно, у меня есть четкий план на будущее",
      "neutral": "Это важно, но у меня нет четкого плана на будущее",
      "neutral": "Я предпочитаю жить настоящим и не беспокоиться о будущем",
    },
    {
      "q": "Как вы обычно тратите свободное время?",
      "invest": "Читаю книги или слушаю подкасты о финансах",
      "neutral": "Занимаюсь спортом, слежу за здоровьем",
      "neutral": "Путешествую или провожу время с семьей",
    },
    {
      "q": "Как вы относитесь к неожиданным расходам?",
      "insured": "Стараюсь избегать их и всегда держу некоторую сумму на всякий случай",
      "save": "Иногда позволяю себе неожиданные траты",
      "neutral": "Не беспокоюсь об этом, так как у меня есть стабильный доход",
    },
    {
      "q": "Как вы относитесь к своему образованию и профессиональному развитию?",
      "saveup": "Всегда ищу новые возможности для обучения и развития",
      "save": "Иногда посещаю курсы или семинары для улучшения навыков",
      "neutral": "Считаю, что у меня достаточно знаний и навыков для текущей работы",
    },
    {
      "q": "Как вы относитесь к своему здоровью и физическому состоянию?",
      "save": "Регулярно занимаюсь спортом и следую здоровому образу жизни",
      "saveup": "Иногда занимаюсь физическими упражнениями и стараюсь вести здоровый образ жизни",
      "neutral": "Не обращаю особого внимания на свое физическое состояние",
    },
    {
      "q": "Как вы относитесь к своему будущему?",
      "insured": "У меня есть четкий план на будущее и я работаю над его реализацией",
      "saveup": "У меня есть некоторые планы, но они могут измениться",
      "neutral": "Я предпочитаю жить настоящим и не беспокоиться о будущем",
    },
    {
      "q": "Как вы относитесь к риску в финансовых вопросах?",
      "invest": "Я готов пойти на значительный риск для получения высоких доходов",
      "save": "Я предпочитаю средний уровень риска",
      "saveup": "Я предпочитаю избегать риска, где это возможно",
    },
    {
      "q": "Как вы относитесь к своему текущему уровню дохода?",
      "neutral": "Я доволен своим текущим уровнем дохода",
      "saveup": "Я хотел бы иметь больше дохода",
      "invest": "Я активно работаю над увеличением своего дохода",
    },
    {
      "q": "Как вы относитесь к своемутекущему уровню расходов?",
      "neutral": "Я доволен своим текущим уровнем расходов",
      "insured": "Я хотел бы сократить свои расходы",
      "saveup": "Я планирую увеличить свои расходы в ближайшем будущем",
    },
    {
      "q": "Как вы относитесь к своему текущему уровню сбережений?",
      "save": "Я доволен своим текущим уровнем сбережений",
      "saveup": "Я хотел бы иметь больше сбережений",
      "invest": "Я не имею сбережений",
    },
    {
      "q": "Как вы относитесь к своему текущему уровню инвестиций?",
      "invest": "Я доволен своим текущим уровнем инвестиций",
      "saveup": "Я хотел бы иметь больше инвестиций",
      "save": "Я не имею инвестиций",
    },
    {
      "q": "Как вы относитесь к своему текущему уровню жизни?",
      "save": "Я доволен своим текущим уровнем жизни",
      "save": "Я хотел бы улучшить свой уровень жизни",
      "invest": "Я активно работаю над улучшением своего уровня жизни",
    }
  ];
  const [strategies, setStrategies] = useState(null);
  const handleProcess = () => {
    const strategiesFromData = Object.strategiesForPriorities; 


    setStrategies(strategiesFromData);
  };

  const handleAnswerClick = (answerKey) => {
    setSelectedAnswer(answerKey);
    setScores(prevScores => ({
      ...prevScores,
      [answerKey]: prevScores[answerKey] + 1
    }));
  };
  const showSlide = (index) => {
    setCurrentIndex(index);
    setSelectedAnswer(-1); // при переключении вопроса сбрасываем выбранный ответ
  };

  const activateDot = (index) => {
    setCurrentIndex(index);
    setSelectedAnswer(-1); // при переключении вопроса сбрасываем выбранный ответ
  };
  const isLastQuestion = currentIndex === slides.length - 1;
  return (
    <section className='sliderAll'>
      <div className="sliderMM">
        <h1>{slides[currentIndex].q}</h1>
        <div className="sentences">
          {Object.entries(slides[currentIndex]).slice(1).map(([key, value]) => (
            <div
              key={key}
              className={`sentence ${selectedAnswer === key ? 'selected' : ''}`}
              onClick={() => handleAnswerClick(key)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      <div>
        {Object.entries(scores).map(([key, value]) => (
          <p key={key}>{key}: {value}</p>
        ))}
      </div>
      <div className="arrowMM">
          <span
            className="leftMM"
            onClick={() => showSlide((currentIndex === 0) ? slides.length - 1 : currentIndex - 1)}
          >
            <img src={arrowLeft} alt="" />
          </span>
          <span
            className="rightMM"
            onClick={() => showSlide((currentIndex === slides.length - 1) ? 0 : currentIndex + 1)}
          >
            <img src={arrowRight} alt="" />
          </span>
        </div>
  
        <div className="dots">
          {slides.map((slide, index) => (
            <span
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              key={index}
              onClick={() => activateDot(index)}
            ></span>
          ))}
        </div>
        {isLastQuestion && (
        <div className='sliderbutton'>
          <button onClick={handleProcess}>Обработать</button>
        </div>
      )}

{strategies && (
        <div>
          {strategies.map((strategy, index) => (
            <p key={index}>
              {scores.saveup > 2 ? strategy.saveUp.strategy : scores.invest > 2 ? strategy.investing.strategy : scores.save > 2 ? strategy.save.strategy : scores.insurance > 2 ? strategy.insurance.strategy : strategy.neutral.strategy}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default Questionaire;




