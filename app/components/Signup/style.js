import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import image from './image.jpg';

export const Main = styled.div`

font-size: 15px;
margin-top: 4.7%;
border:1px solid #ccc;
width: 100%;
height: 640px;
margin-left: auto;
margin-right: auto;
background-size: cover;
background-image: url(${image});



@media screen and (max-width: 300px) {
  button {
      width: 100%;
  }
}

form {
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
  margin-top: 2.5%;
}

`;

export const BoxModel = styled.div`

      width: 90%;
      margin-left: auto;
  margin-right: auto;


`;

export const Container = styled.div`

      background-color: #f1f1f1;
      text-align: center;
      margin-top: 5%;

`;

export const Middle = styled.div`

input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

`;

export const SigningUp = styled.div`

border: none;
outline: none;
height: 40px;
background-color: #4CAF50;
color: #fff;
border-radius: 20px;
text-align: center;
font-weight: bold;
font-size: 20px;


:hover {
  cursor: pointer;
  color: #000;
  
}

.menu 
{
display: block;
width: 100%;
height: 100%;
color: #fff;
position: relative;
top: 3px; 

}

`;
