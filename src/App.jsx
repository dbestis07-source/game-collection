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
      <Header title="🎮 Mijn Ultieme Game Collection" />

      <div className="game-list">
        <h2>Welkom bij mijn eindproject!</h2>
        <p>Naam: Dilbeste</p>
        <p>Studentnummer: [Jouw Studentnummer]</p>
        <p>Klas: 25A</p>

        <input
          className="search-input"
          type="text"
          placeholder="Zoek op titel, genre, platform of developer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase()) ||
            game.genre.toLowerCase().includes(search.toLowerCase()) ||
            game.platform.toLowerCase().includes(search.toLowerCase()) ||
            game.developer.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              genre={game.genre}
              developer={game.developer}
              multiplayer={game.multiplayer}
              rating={game.rating}
              year={game.year}
              image={game.image}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;