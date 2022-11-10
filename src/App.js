import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Head from './components/Head';
import BreedList from './components/BreedList';
import RandomDogs from './components/RandomDogs';


function App() {
  const [breeds, setBreeds] = useState('')

  const [randomDog, setRandomDog] = useState()

  const [randomDogBreed, setRandomDogBreed] = useState()

  const [currrentView, setCurrentView] = useState()

  
  const getBreeds = () => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => (Object.entries(res.data.message)))
      .then(res => setBreeds(res))
  }


  const getRandomDog = () => {
    axios.get(`https://dog.ceo/api/breed/${randomDogBreed}/images/random`)
      .then(res => setRandomDog(res.data.message))
      .catch(err => alert('wrong breed'))
  }

  const setView = view => {
    setCurrentView(view)
  }
  return (
    <div className="App">
      <Head setView={setView}/>
      {currrentView == 'RANDOM PICTURES' ? <RandomDogs randomDogBreed = {randomDogBreed} randomDog = {randomDog} getRandomDog = {getRandomDog} setRandomDogBreed = {setRandomDogBreed}/> : <BreedList breeds = {breeds} getBreeds = {getBreeds}/>}
    </div>
  );
}

export default App;