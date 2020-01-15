import React from 'react';
import DrumPad from './DrumPad'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisButtonIsActive: '',
      audioIsActive: false,
      activeDisplay: 'Press a key to play the drums!'
    };

    this.handleClick = this.handleClick.bind(this);

  }

  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleClick = () => {
    this.setState({activeDisplay: 'Test'})
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
          <h3 id="display">{this.state.activeDisplay}</h3>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <section className="col-6 bg-light">
        <DrumPad  handleClick={this.handleClick}/>
        </section>
      </div>

    </div>
  );
}
}

export default App;
