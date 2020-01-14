import React from 'react';
import DrumPad from './DrumPad'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisButtonIsActive: '',
      audioIsActive: false,
    }
  }

  render() {
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
        <DrumPad />
        </section>
      </div>

    </div>
  );
}
}

export default App;
