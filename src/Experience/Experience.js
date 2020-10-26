import React from "react";
import '../index.css';
import Separator from '../Separator/Separator';
import './Experience.css'


function Experience(props) {
    return (
        <React.Fragment>
            <Separator value="Experience Pro"/>
            <div className="flex-container">
                <div id="total" className="tile animated flex-container-inTile">
                    <div className="textInTile text">Total</div>
                    <div className="textInTile text">Python</div>
                </div>

                <div id="gbh" className="tile animated flex-container-inTile">
                    <div className="textInTile text">GBH</div>
                    <div className="textInTile text">NodeJS</div>
                </div>

                <div id="safran" className="tile animated flex-container-inTile">
                    <div className="textInTile text">Safran</div>
                    <div className="textInTile text">JAVA</div>
                </div>

                <div id="arpiae" className="tile animated flex-container-inTile">
                    <div className="textInTile text">Arpiae</div>
                    <div className="textInTile text">Management</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Experience;