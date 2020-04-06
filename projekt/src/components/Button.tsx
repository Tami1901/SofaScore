import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: 70%;
  margin: 0 auto;
  border-radius: 10px;
  height: 50px;
  border: none;
  color: #ff8f02;
  font-size: 20px;
  font-weight: bold;
  &.button:hover {
    color: white;
    background-color: rgba(244, 160, 2, 1);
    cursor: pointer;
  }
`;

export default Button;
