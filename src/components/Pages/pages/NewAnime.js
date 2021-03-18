/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { HomeData1 } from "./Form/data/Data";
import Mon from "./Form/Mon";
import { Click, List1 } from "./style/MainVisualStyle";

import "./style/NewAnime.scss";

function NewAnime() {
  const [comp, setComp] = useState([]);
  const [click, SetClick] = useState(false);

  const handleClick = () => SetClick(!click);

  return (
    <div className="NewAnimeWrapper">
      <h1 className="NewAnimeH1">요일별 신작</h1>
      <div className="UploadLink">
        <button className="button1">
          <a href="#" className="button1Link">
            업로드 공지
          </a>
        </button>
        <ul className="toggle" click={click}>
          <Click
            onClick={() => setComp(<Mon {...HomeData1} />)}
            className="on"
            spy={true}
            click={click}
          >
            <List1 className="list_toggle" onClick={handleClick}>
              월
            </List1>
          </Click>
          <Click
            onClick={() => setComp(<div>1</div>)}
            className="on"
            spy={true}
          >
            <List1 className="list_toggle">화</List1>
          </Click>
          <Click>
            <List1 className="list_toggle">수</List1>
          </Click>
          <Click>
            <List1 className="list_toggle">목</List1>
          </Click>
          <Click>
            <List1 className="list_toggle">토</List1>
          </Click>
          <Click>
            <List1 className="list_toggle">일</List1>
          </Click>
          <main children={comp} />
        </ul>
      </div>
    </div>
  );
}

export default NewAnime;
