/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css'
import './style/Header.scss'

function Header() {
     return (
          <header className="header">
              <h1 className="LaftelH1">LAFTEL</h1>
              <ul classNmae="LaftelUl">
                  <a href="" className="Laftelli">
                      태그검색
                  </a>
                  <a href="" className="Laftelli">
                      요일별 신작
                  </a>
                  <a href="" className="Laftelli">
                      테마추천
                  </a>
                  <a href="" className="Laftelli">
                      맴버십
                  </a>
              </ul>
              <form className="searchForm">
                 <input type="search" className="search">

                 </input>
                 <a href="" className="LaftelSearchLink">
                     로그인/가입
                 </a>
              </form>
          </header>
     );
 }


 export default Header;