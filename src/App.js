import React from 'react';


function App() {
  return (
    <div className="container"  id="drum-machine">
      <div className="row">
        <header className="col text-center">
          <h1>FCC Drum Machine</h1>
        </header>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col text-center">
          <h3 id="display">Key Display</h3>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <section className="col-6 bg-light">
            <button type="button" className="btn btn-primary mr-1">Q</button>
            <button type="button" className="btn btn-primary mr-1">W</button>
            <button type="button" className="btn btn-primary mr-1">E</button>
            <button type="button" className="btn btn-primary mr-1">A</button>
            <button type="button" className="btn btn-primary mr-1">S</button>
            <button type="button" className="btn btn-primary mr-1">D</button>
            <button type="button" className="btn btn-primary mr-1">Z</button>
            <button type="button" className="btn btn-primary mr-1">X</button>
            <button type="button" className="btn btn-primary mr-1">C</button>
        </section>
      </div>

    </div>
  );
}

export default App;
