import logo from './logo.svg';
import './App.css';
import Click from './hoc/Click';
import Hover from './hoc/Hover';
import ClickCount from './renderProps/ClickCount';
import HoverCount from './renderProps/HoverCount';
import EventCount from './renderProps/EventCount';
import ClickCounter from './HigherOrderComponents/ClickCounter';
import HoverCounter from './HigherOrderComponents/HoverCounter';
import Candidate from './renderProps/Candidate';


function App() {
  return (
    <div className="App">
      {/* HOC */}
      {/* <Click/> */}
      {/* <Hover/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br></br> Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* Higher Order Components */}
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}





      {/* Render Props */}
      <Candidate render={() => 'karu1'} />
      {/* <ClickCount/>
      <HoverCount/> */}
      <EventCount render={(countFromClickCount, handlerFromClickCount) => (
        <ClickCount count={countFromClickCount} handler={handlerFromClickCount} />
      )} />

      <EventCount render={(countFromClickCount, handlerFromClickCount) => (
        <HoverCount count={countFromClickCount} handler={handlerFromClickCount} />
      )} />

    </div>
  );
}

export default App;
