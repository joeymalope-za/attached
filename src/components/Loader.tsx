import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import * as animationData from './loading-circle.json';


const LottieContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  outline: red solid 1px;
`;


function Loader(): JSX.Element {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      
      return <Lottie options={defaultOptions} />;
      
}

export default Loader;
