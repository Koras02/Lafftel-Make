import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  height: 20px;
  //   border:1px solid red;
  position: absolute;
  left: 20%;
`;

export const Click = styled.div`
  display: inline-flex;
  margin: 15px;
  width: 40px;
  height: 40px;
  // border:1px solid #000;
  border-radius: 100%;
  padding: 10px;
  text-align: center;
  background: ${({ click }) => (click ? "red" : "blue")};
`;

export const List1 = styled.div`
  text-align: center;
  position: relative;
  left: 10px;
  top: 5px;
  font: bold 18px/24px arial;
  color: #fff;
`;
