import styled from 'styled-components';
import image from './image.jpg';

export const InsideForm = styled.div`
  margin-top: 10%;
`;

export const ForgetPassword = styled.div`
  margin-left: 16%;
  margin-top: 5%;
`;

export const SignUp = styled.div`
  margin-left: 75%;
  margin-top: -3.6%;
`;

export const Avatar = styled.div`
  img {
    width: 100px !important;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    margin-top: -78%;
    left: calc(50% - 50px);
  }
`;

export const Wrapper = styled.div`
  margin-top: 4.7%;
  padding: 0;
  backgroundImage: "url(" + { Background } + ")" no-repeat;
  backgroundImage: "url(" + { Logo } + ")" ;
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
 

  .img
  {
    width: 100%;
      }
`;

export const Form = styled.div`
  border: 1px solid #000000;
  width: 45%;
  height: 100%;
  margin-left: 50%;
  margin-top: -50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  position: absolute;
`;

export const TopBar = styled.div`
  border-bottom: 2px solid palevioletred;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
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


//  Homepage - Starts //

export const LeftDate = styled.div `

margin-top: 10%;
margin-left: 10%;
width: 20%;
box-shadow: 1px 1px 1px 1px;
background-color: #e7e7e7; color: black;

`;

export const RightDate = styled.div `

margin-top: -25px;
margin-left: 40%;
width: 20%;
box-shadow: 1px 1px 1px 1px;
background-color: #e7e7e7; color: black;

`;

export const Login = styled.div `

border: 2px solid;
border-radius: 5px;

box-shadow: 2px 2px 2px 2px;
margin-top: 10%;
width: 80%;
margin-left: auto;
margin-right: auto;
padding-bottom: 10%;
`;
/*
export const Button = styled.div `

  height: 100vh;
	display: flex;
	justify-content: center;
  align-items: center;
  text-align: center;
`;
*/

// Ending of Homepage  // 


//  Signup - Starts //


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


// Ending of Signup  // 


//  ResetPass - Starts //



export const ResetForm = styled.div`


margin-left: auto;
margin-right: auto;
margin-top: 15%;
border: 1px solid #000000;
width: 40%;
height: 200px;
background-size: cover;
background-image: url(${image});

`;

export const Emailtext = styled.div`

margin-top: 10px;

.text{
  margin-left: 10%;
}



`;

export const Emailtext2 = styled.input`
width: 80%;
margin-left: auto;
margin-right: auto;
margin-top: 15px;
border: 1px solid #000000;
height: 46px;
padding: 10px 16px;
font-size: 18px;
line-height: 1.3333333;
border-radius: 3px;

.text1{
  width: 100%;
}

`;

export const ResetButton = styled.button`
margin-top: 10%;
width: 80%;
height: 15%;
margin-left: auto;
margin-right: auto;
text-align: center;

`;


// Ending of ResetPass  // 