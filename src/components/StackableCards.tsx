import React, { useState, useMemo, useRef, useEffect } from 'react'
import { StyledCardContainer, CircularButton } from './StactableCards.styles'
import ProgressBar from './components/ProgressBar'
import { AttachmentStyle, Questionaire, Card, Reference, AttachmentStyleTracker } from './types'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/swiper-bundle.min.css";

import "./style.css";
import Loader from './Loader';
//https://codesandbox.io/p/sandbox/msxyp3?file=%2Fsrc%2FApp.jsx&selection=%5B%7B%22endColumn%22%3A8%2C%22endLineNumber%22%3A33%2C%22startColumn%22%3A1%2C%22startLineNumber%22%3A16%7D%5D

const findAttachmentStyle = (list: Array<Card>, questionaireState: AttachmentStyleTracker) => {
  const temp = list;
  if(questionaireState.secure === 2)
    return temp.filter((item : Card) => item.attachmentStyle === AttachmentStyle.Secure)
  else if(questionaireState.anxios === 2)
    return temp.filter((item : Card) => item.attachmentStyle === AttachmentStyle.Anxious)
  else if(questionaireState.avoidant === 2)
    return temp.filter((item : Card) => item.attachmentStyle === AttachmentStyle.Avoidant)
  else
    return temp
}

export default function StackableCards() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [questionaire, SetQuestionaire] = useState(Questionaire);
  const [isLoading, SetIsLoading] = useState(true);
  const [questionaireState, SetQuestionaireState] = useState<AttachmentStyleTracker>({
    anxios: 0,
    avoidant: 0,
    secure: 0,
    active: AttachmentStyle.None
  });

  function nextSlide() {
    swiper?.slideNext(500);
    updateQuestionaireState();
    console.log(swiper?.activeIndex);
    console.table(questionaireState);
  }

  const prevSlide = () => {
    swiper?.slidePrev(500);
    updateQuestionaireState();
    console.log(swiper?.activeIndex);
    console.table(questionaireState);
  };

  //function to update the questionaire state
  const updateQuestionaireState = () => {
    const index = swiper?.activeIndex? swiper?.activeIndex -1 : 0;
    const card = questionaire[index];
    console.log("card: ",card);
    console.log("Before Update: questionaireState ",questionaireState);


    if(card.attachmentStyle === AttachmentStyle.Secure)
  //     questionaireState.secure+=1
        SetQuestionaireState(prevState => ({
          ...prevState,
          secure: prevState.secure + 1,
        }));
      else if(card.attachmentStyle === AttachmentStyle.Anxious)
        SetQuestionaireState(prevState => ({
          ...prevState,
          anxios: prevState.anxios + 1,
        }));
    else if(card.attachmentStyle === AttachmentStyle.Avoidant)
        SetQuestionaireState(prevState => ({
          ...prevState,
          avoidant: prevState.avoidant + 1,
        }));
 //   console.log("after Update: questionaireState ",questionaireState);
  }

  useEffect(() => {
    if(questionaireState.secure === 2 || questionaireState.anxios === 2 || questionaireState.avoidant === 2){
      const temp = findAttachmentStyle(questionaire, questionaireState);
      SetQuestionaire(temp);
     // console.log("temp: ",temp)
    }
 //   console.log("questionaireState: ",questionaireState);
  },[questionaireState])

  return (
    <StyledCardContainer>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        centeredSlides={true}
        onSwiper={(_swiper)=>{
          console.log(_swiper.activeIndex);
          setSwiper(_swiper);
          SetIsLoading(false);
        }}
        onLoad={(_swiper)=>{
            console.log("starting");
        }}
        onAfterInit={(_swiper)=>{
            console.log("afterInit");
            SetIsLoading(false);
        }}

        onBeforeInit={(_swiper)=>{
            console.log("beforeInit");
        }}
        
      >
        {swiper && questionaire.map((card,index) =>
          <SwiperSlide key={index}>
            <div className='card'>
              <header>
                <ProgressBar progress={index} total={questionaire.length} />
              </header>
              <main>
                <h3>{`${index+1}) `}{card.question}</h3>
              </main>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
     {swiper &&  <div className='buttons'>
          <CircularButton role='img' onClick={prevSlide}>👎</CircularButton>
          <CircularButton role='img' onClick={nextSlide}>👍</CircularButton>
      </div>}
    </StyledCardContainer>
  )
}
