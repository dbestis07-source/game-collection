import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
  // State to hold search query
  const [search, setSearch] = useState("");

  // Array of games (expanded with 7 games total)
  const games = [
    {
      id: 1,
      title: "Minecraft",
      platform: "PC",
    },
    {
      id: 2,
      title: "Mario Kart",
      platform: "Nintendo Switch",
    },
    {
      id: 3,
      title: "Rocket League",
      platform: "PlayStation 5",
    },
    {
      id: 4,
      title: "Elden Ring",
      platform: "PC",
    },
    {
      id: 5,
      title: "The Legend of Zelda",
      platform: "Nintendo Switch",
    },
    {
      id: 6,
      title: "Fortnite",
      platform: "PC",
    },
    {
      id: 7,
      title: "EA Sports FC 26",
      platform: "PlayStation 5",
    },
  ];

  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Dilbeste</p>
        <p>Studentnummer: [Your Student Number]</p>
        <p>Klas: 25A</p>

        {/* Assignment 2 & 5: Styled search input field */}
        <input
          className="search-input"
          type="text"
          placeholder="Zoek een game..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Assignment 3: Filter array based on search input before mapping */}
        {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;