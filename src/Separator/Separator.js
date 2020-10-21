import React from "react";
import './Separator.css';


function Separator(props) {
    return(
    <div className="separator">
        <p class={"item"}>{props.value}</p>
        <div className="line item"></div>
    </div>)
}

export default Separator;