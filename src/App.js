import "./App.css";
import { useState } from "react";
import QuizScreen from "./components/QuizScreen.js"
import JoinScreen from "./components/JoinScreen.js"
import Navbar from "./components/Navbar.js"


function App() {
  const [isQuizStarted, setIsQuiczStarted] = useState(false);
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        {
          isQuizStarted ? (
            <QuizScreen retry={() => setIsQuiczStarted(false)} />
          ) : (
            <JoinScreen start={() => setIsQuiczStarted(true)} />
          )
        }
      </div>
    </>
  );
}

export default App;
