import styled from "styled-components";

const Form = styled.form`
  width: 360px;
  background-color: white;
  height: 400px;
  padding: 80px 40px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 11px 14px 25px 5px grey;
`;

const Input = styled.input`
  color: #333;
  font-size: 15px;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 5px;
  height: 40px;
`;

export { Form, Input };
