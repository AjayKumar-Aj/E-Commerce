import styled from 'styled-components';
import image from './image.jpg';

export const Bg = styled.div`
  width: 1349px;
  height: 800px;
  margin: 0;
  padding: 0;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
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

  input[type='submit']:hover {
    cursor: pointer;
    background: #39dc79;
    color: #000;
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

export const SigningUp = styled.div`
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  margin-left: 85%;
  margin-top: -8.5%;
`;

export const Login = styled.div`
border: none;
outline: none;
height: 40px;
background: #1c8adb;
color: #fff;
font-size: 18px;
border-radius: 20px;
text-align: center;
  
`;

export const Wrapper = styled.div`
  body {
  }
`;
