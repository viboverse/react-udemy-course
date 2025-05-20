import Player from "./components/Player.jsx";
import ResultModal from "./components/ResultModal.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <ResultModal />
      <div id="challenges">
        <TimerChallenge title="EASY" targetTime={1} />
        <TimerChallenge title="NOT EASY" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
