import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import games from "./data/games.json";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Dilbeste</p>
        <p>Studentnummer: [Your Student Number]</p>
        <p>Klas: 25A</p>

        <input
          className="search-input"
          type="text"
          placeholder="Zoek een game..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              genre={game.genre}
              rating={game.rating}
              year={game.year}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;