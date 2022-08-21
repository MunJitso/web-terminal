import './App.css';
import Terminal from "./Terminal";
function App() {
  return (
      <div className="App">
        <div className="terminal">
          <div className="hot-bar">
            <div>
              <p className="window-name"> Root Terminal</p>
            </div>
            <div className="buttons">
              <div className="minimize"></div>
              <div className="fullscreen"></div>
              <div className="close"></div>
            </div>
          </div>
          <div className="infos">
              <Terminal/>
          </div>
        </div>
      </div>
  );
}


export default App;