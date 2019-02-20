import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import image from './image.jpg';

export const InputBox = styled.input`
  width: 70%;
  display: flex;
  background: transparent;
  margin-left: auto;
  margin-right: auto;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  text-align: center;
  margin-bottom: 27px;
  :focus {
    border: 2px solid rgba(0, 0, 0, 0.18) !important;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9c27b0, #e040fb);
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 10px;
  outline: none;
  margin-left: 40%;
`;

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
