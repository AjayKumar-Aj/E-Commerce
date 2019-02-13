import styled from 'styled-components';
import image from './image.jpg';

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7%;
  padding: 0;
  backgroundImage: "url(" + { Background } + ")" ;
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
`;

export const InsideForm = styled.div`
  margin-top: 5%;
`;

export const ForgetPassword = styled.div`
  margin-left: 16%;
  margin-top: 5%;
`;

export const SignUp = styled.div`
  margin-left: 75%;
  margin-top: -3.6%;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 420px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  top: 55%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 70px 30px;

  p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
  input {
    width: 100%;
    margin-bottom: 20px;
  }

  input[type='text'],
  input[type='password'] {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
  }
  input[type='submit'] {
    border: none;
    outline: none;
    height: 40px;
    background: #1c8adb;
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
  }


  a {
    text-decoration: none;
    font-size: 14px;
    color: #fff;
  }

  h1 {
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
  }

  a:hover {
    color: #39dc79;
  }
`;

export const Avatar = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
  }
`;

export const Forget = styled.div`
margin-top: 8.5%;
`;

export const SigningUp = styled.div`
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  margin-left: 85%;
  margin-top: -8.5%;
`;

export const Login = styled.button`
border: none;
outline: none;
height: 40px;
background: #1c8adb;
color: #fff;
border-radius: 20px;
text-align: center;
font-weight: bold;
font-size: 20px;


:hover {

  cursor: pointer;
  color: #000000;
  width: 100%;

}

.menu
{
display: block;
width: 100%;
height: 100%;
position: relative;
top: 20%;
left: auto;
right: auto;
}

`;

export const Wrapper = styled.div`
  
  
  
  
`;

export const Form = styled.div`
    border: 1px solid #000000;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -10%;
    height: 70%;
`;


export const TopBar = styled.div`
  border-bottom: 2px solid palevioletred;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
`;

export const ParentList= styled.div`
  display: flex;
  align-items: stretch;
  text-decoration: none;
  color: #FFFFFF;
  div {
    margin-top: 10px;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    flex-grow: 1;
    a {
      color: #FFFFFF;
      text-decoration: none;
    }
    Button {
      background: #ee9ca7;
      background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);
      background: linear-gradient(to right, #ffdde1, #ee9ca7);
      color: #8C55AA;
      a {
        text-decoration: none;
        color: #8C55AA;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;

export const CenterContainer = styled.div`
  background-color: #FFFFFF;
  max-width: 400px;
  height: auto;
  padding-bottom: 30px;
  margin: 7em auto;
  border-radius: 1.5em;
  text-align: center;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9C27B0, #E040FB);
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

export const MainBody = styled.div`
  background: #ED213A;
  background: -webkit-linear-gradient(to right, #93291E, #ED213A);
  background: linear-gradient(to right, #93291E, #ED213A);
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
`;

export const BoxText = styled.p`
  padding-top: 40px;
  color: #8C55AA;
  font-weight: bold;
  font-size: 23px;
  text-align: center;
`;

export const Content = styled.p`
  color: #FFFFFF;
  padding-top: 40px;
  font-size: 23px;
  text-align: center;
`;

export const InputBox = styled.input`
  width: 70%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
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

export const AdditionalFormData = styled.p`
  text-align: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #a57aad;
  }
`;
