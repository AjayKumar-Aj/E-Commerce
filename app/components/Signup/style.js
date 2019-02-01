import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';

export const Main = styled.div`

      font-size: 15px;
      margin-top: 10%;
      border:1px solid #ccc;
      width: 50%;
      

      @media screen and (max-width: 300px) {
        button {
           width: 100%;
        }
      }

      `;

export const Container = styled.div`

      background-color: #f1f1f1;
      text-align: center;

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

export const Clearfix = styled.div`

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  float: left;
  width: 50%;
}

button:hover {
  opacity:1;
}

::after {
  content: "";
  clear: both;
  display: table;
}



`;

