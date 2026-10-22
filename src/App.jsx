import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
  // Assignment 1 & 4: The array containing all game data (including your 4th game)
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
  ];

  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Dilbeste</p>
        <p>Studentnummer: [Your Student Number]</p>
        <p>Klas: 25A</p>

        {/* Assignment 3: Automatically generate a GameCard for every item in the array */}
        {games.map((game) => (
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