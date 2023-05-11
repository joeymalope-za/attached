import React from 'react';
import styled from 'styled-components';

export const StyledProgressBar = styled.div`
  width: 80%;
  min-width:200px;
  margin: 0 auto;
  height: 10px;
  background: #fff;
  padding:0px;
  box-sizing: border-box;
  border-radius:15px;
  overflow:hidden;

  .progress{
    height:100%;
    background-color: #9198e5;
    border-radius:15px;
  }
`;
