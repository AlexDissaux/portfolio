import React from 'react';
import '../index.css';
import Separator from '../Separator/Separator'
import './Tech.css'

function Tech(props) {
    return (
        <React.Fragment>
            <Separator value="Tech"/>
            <div className="flex-container">
                <div className="tile animated flex-container">
                    <p className="textInTile">CV</p></div>
                <div className="tile animated flex-container">
                    <p className="textInTile">CV</p></div>
                <div className="tile animated flex-container">
                    <p className="textInTile">CV</p></div>
            </div>
        </React.Fragment>
    )
}

export default Tech;