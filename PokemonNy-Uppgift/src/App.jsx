import React, { useState } from 'react';
import PokemonApplication from './Components/Pokemonapp';

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <div>
      {!showApp ? (
        <button onClick={() => setShowApp(true)}>Starta Pokemon App</button>
      ) : (
        <PokemonApplication goHome={() => setShowApp(false)} />
      )}
    </div>
  );
}

export default App;