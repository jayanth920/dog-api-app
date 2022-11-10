import React from "react";

const BreedList = ({breeds, getBreeds}) => {


    return (
        <div>
            <h1>ALL BREEDS</h1>
            <button onClick={getBreeds}>BREEDS</button>
            <ul>
                {breeds && breeds.map((props) => {
                    return (
                        <ul>
                            {props.map((breed) => {
                                return <p>{breed}</p>
                            }) }
                        </ul>
                    )
                })}
            </ul>
        </div>
    )
}

export default BreedList