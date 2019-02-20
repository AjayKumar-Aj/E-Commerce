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
