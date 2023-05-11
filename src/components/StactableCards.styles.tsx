import styled from 'styled-components';

export const CircularButton = styled.div`
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
  font-size: 20px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;


export const StyledCardContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300;1,400&display=swap'); 
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 360px;
overflow: hidden;


*{
  font-family: 'Poppins', sans-serif;
}

.swipe {
  position: absolute;
}

.cardContainer {
  width: 90vw;
  max-width: 260px;
  height: calc(300px*1.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  position: relative;
  background-color: #f8ceec;
  background-image: radial-gradient(circle,#fff 0%, #E8DCFF 74%);
  width: 100%;
  max-width: calc(260px*1.2);
  height: 100%;
  border-radius: 20px;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  padding: 1.25rem;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.cardContent {
  width: 100%;
  height: 100%;
}

.card h3 {
  margin: 10px;
  color: #333;
  font-weight: 400;
}

.infoText {
  width: 100%;
  justify-content: center;
  display: flex;
  color: #fff;
  animation-name: popup;
  animation-duration: 800ms;
}

.buttons {
  width: 200px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media (max-width: 625px) {
  .buttons {
    flex-direction: row;
  }
}

.buttons button {
  flex-shrink: 0;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  background-color: #9198e5;
  transition: 200ms;
  margin: 10px;
  font-weight: bolder;
  width: 160px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.10);
}

.buttons button:hover {
  transform: scale(1.05);
}

@keyframes popup {
  0%   { transform: scale(1,1) }
  10%  { transform: scale(1.1,1.1) }
  30%  { transform: scale(.9,.9) }
  50%  { transform: scale(1,1) }
  57%  { transform: scale(1,1) }
  64%  { transform: scale(1,1) }
  100% { transform: scale(1,1) }
}
`