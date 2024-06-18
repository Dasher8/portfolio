import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Outil( {icon} ){
    return (
        <div className="outil">
            <FontAwesomeIcon icon={icon} className="outil-icon" />
          </div>
    )
}