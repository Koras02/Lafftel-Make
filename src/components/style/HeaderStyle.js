import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  overflow: hidden;
  background: ${({ scrollNav }) => (scrollNav ? "none" : "#f2f2f2")};
  transition: ${({ scrollNav }) => (scrollNav ? "1.5s" : "0.5s")};
  //   background: red;
  z-index: 999;
  color: #000;
  position: fixed;
  top: -0.5%;
`;

export const LaftelH1 = styled.div`
  text-align: left;
  margin-left: 40px;
  // display:flex;
  display: flex;
  float: left;
  font-size: 28px;
  font-weight: bold;
  color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#000")};
  transition: ${({ scrollNav }) => (scrollNav ? "1.5s" : "0.5s")};
  line-height: 80px;
`;

export const LaftelLink = styled(LinkR)`
  float: left;
  margin: 24px 0px 0px 30px;
  color: #000;
  z-index: 999;
  list-style: none;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#000")};
  transition: ${({ scrollNav }) => (scrollNav ? "1.5s" : "0.5s")};
`;

export const LafterUl = styled.div`
  align-items: center;
  border: 1px solid #000;
`;

export const Form = styled.div`
  float: right;
  position: relative;
  left: -4%;
  top: 10px;
  // border:1px solid #000;
  width: 280px;
  height: 60px;
`;

export const LaftelLoginLink = styled(LinkR)`
  text-decoration: none;
  color: ${({ scrollNav }) => (scrollNav ? "#fff" : "#000")};
  transition: ${({ scrollNav }) => (scrollNav ? "1.5s" : "0.5s")};
  float: right;
  position: relative;
  top: 15px;
  left: -20px;

  font: bold 16px/20px arial;
`;
