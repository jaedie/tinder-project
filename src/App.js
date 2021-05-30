import "./dist/css/App.css";
import Header from "./Header/Header";
import SwipeButtons from "./SwipeButtons/SwipeButtons";
import TinderCards from "./TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
