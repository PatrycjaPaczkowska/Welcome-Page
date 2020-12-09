import styled from 'styled-components';
import img from './img/bgc.jpg';

export const AppStyle = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   min-height: 100vh;
   background-image: url(${img});
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   font-weight: 100;
   font-size: calc(10px + 2vmin);
   color: white;

   .panels {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
}`;