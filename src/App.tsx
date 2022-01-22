import { useState } from 'react';
import './App.css';
import { DogImage } from './components/DogImage';
import { DogSelector } from './components/DogSelector';

function App() {

  const [currentDog, setDog] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog Image Fetcher</h1>
        <DogSelector onSelected={(dog) => setDog(dog)} />
        <DogImage dog={currentDog} />
      </header>
    </div>
  );
}

export default App;
