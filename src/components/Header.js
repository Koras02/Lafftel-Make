/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../App.css";
import "./style/Header.scss";
import {
  Form,
  HeaderWrapper,
  LaftelH1,
  LaftelLink,
  LaftelLoginLink,
  LafterUl,
} from "./style/HeaderStyle";

export function Header() {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(false);
    } else setScrollNav(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <HeaderWrapper className="header" scrollNav={scrollNav}>
      <LaftelH1 scrollNav={scrollNav}>LAFTEL</LaftelH1>
      <LafterUl scrollNav={scrollNav}>
        <LaftelLink scrollNav={scrollNav} to="">
          태그검색
        </LaftelLink>
        <LaftelLink scrollNav={scrollNav} to="">
          요일별 신작
        </LaftelLink>
        <LaftelLink scrollNav={scrollNav} to="">
          테마추천
        </LaftelLink>
        <LaftelLink scrollNav={scrollNav} to="">
          멤버십
        </LaftelLink>
      </LafterUl>
      <Form scrollNav={scrollNav}>
        <input type="search" className="search"></input>
        <LaftelLoginLink to="" scrollNav={scrollNav}>
          로그인/가입
        </LaftelLoginLink>
      </Form>
    </HeaderWrapper>
  );
}

export default Header;
