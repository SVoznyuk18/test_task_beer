import React from "react";

const Button = ({handleClick, onClick}) => {
    return (
        <button className="button" onContextMenu={handleClick} onClick={onClick}>
            Delete
        </button>
    )
}

export default Button;