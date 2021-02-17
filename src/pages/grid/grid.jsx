import React from "react";
import "./styles.css";
import valorant from "../images/valorant.jpg";

function grid() {
    return (
        <div className="gridContainer">
        <section className="grid-1">
            <div className="item-1">
            <img className="imgVal" src={valorant}></img>
            </div>
            <div className="item-2">
                <img className="imgVal" src={valorant}></img>
            </div>
            <div className="item-3">
                <img className="imgVal" src={valorant}></img>
            </div>
            <div className="item-4">
                <img className="imgVal" src={valorant}></img>
            </div>
        </section>
        </div>
    );
  }
  
  export default grid;
  