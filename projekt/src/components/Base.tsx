import styled from "styled-components";

const Div = styled.div`
  &.container {
    height: 100%;
    width: 100%;
    background: radial-gradient(circle, rgba(233, 228, 148, 1) 0%, rgba(244, 160, 2, 1) 100%);
    box-sizing: border-box;
  }

  &.txt {
    border-bottom: 2px solid black;
    position: relative;
    margin: 30px 0;
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 60px;
  font-weight: bold;
`;

export { Div, H1 };
