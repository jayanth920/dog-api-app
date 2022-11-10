

import React from "react";

const Head = ({setView}) => {
    return(
        <div className="title">
            <div className="links">
                <button onClick={() => {setView('BREEDS LIST')}}>BREEDS LIST</button>
                <button onClick={() => {setView('RANDOM PICTURES')}}>RANDOM PICTURES</button>
            </div>
        </div>
    )
}

export default Head