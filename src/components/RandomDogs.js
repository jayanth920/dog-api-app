import React, { useState } from "react";

const RandomDogs = ({setRandomDogBreed, getRandomDog, randomDog}) => {
const [randomBreedInput, setRandomBreedInput] = useState('')
const handleChange = (e) => {
        setRandomBreedInput(e.target.value)
    }

    const handleSubmit = () => {
        setRandomDogBreed(randomBreedInput)
        getRandomDog()
    }

    return(
        <div>
            <h1>DOG BREED PIC</h1>
            <div>
                <input type='text' onChange={handleChange}></input>
                <button onClick={handleSubmit}>SEARCH</button>
            </div>
            {<img src={randomDog}></img>}
        </div>
    )
}

export default RandomDogs