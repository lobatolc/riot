import React from "react";
import "./styles.css";
import imgKing from "../images/bg-ruined-king.jpg";

function king() {
  return (
    <>
      <div className="bodyKing">
        <div className="bgRuinedKing">
          <img className="imgRuinedKing" src={imgKing}></img>
        </div>
        <h1>Ruined King</h1>
        <div className="btnSobre">
            <button type="button" className="btnSobre2">/ Saiba mais</button>
        </div>
      </div>
      
    </>
  );
}

export default king;
