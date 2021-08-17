import video from "../data/video.js";
import Details from "./Details"

function App() {
  console.log("Here's your data:", video);

  return (
    <div>
      <div className="App">
        <iframe
          width="919"
          height="525"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allowfullscreen
          title="Thinking in React"
        />
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
}

export default App;
