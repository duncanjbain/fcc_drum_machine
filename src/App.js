import React from 'react';
import ReactFCCtest from 'react-fcctest';


const DRUM_PAD = [{
  keyCode: 81,
  keyPress: 'Q',
  id: 'drum-press-1',
  audioFile: '/audio/drum-press-1.wav'
},
{
  keyCode: 87,
  keyPress: 'W',
  id: 'drum-press-2',
  audioFile: '/audio/drum-press-2.wav'
},
{
  keyCode: 69,
  keyPress: 'E',
  id: 'drum-press-3',
  audioFile: '/audio/drum-press-3.wav'
},
{
  keyCode: 65,
  keyPress: 'A',
  id: 'drum-press-4',
  audioFile: '/audio/drum-press-4.wav'
},
{
  keyCode: 83,
  keyPress: 'S',
  id: 'drum-press-5',
  audioFile: '/audio/drum-press-5.wav'
},
{
  keyCode: 68,
  keyPress: 'D',
  id: 'drum-press-6',
  audioFile: '/audio/drum-press-6.wav'
},
{
  keyCode: 90,
  keyPress: 'Z',
  id: 'drum-press-7',
  audioFile: '/audio/drum-press-7.wav'
},
{
  keyCode: 88,
  keyPress: 'X',
  id: 'drum-press-8',
  audioFile: '/audio/drum-press-8.wav'
},
{
  keyCode: 67,
  keyPress: 'C',
  id: 'drum-press-9',
  audioFile: '/audio/drum-press-9.wav'
}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisButtonIsActive: '',
      audioIsActive: false,
      activeDisplay: 'Press a key to play the drums!',
      drumPad: DRUM_PAD
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

handleKeyPress(event) {
  if(event.keyCode === 81) {
    this.setState({activeDisplay: 'Key Q Pushed'})
    const sound = document.querySelector('#Q')
    sound.currentTime = 0;
    sound.play();
  }
}

playSound(event) {
  const audio = document.getElementById(this.props.keyPress);
}

handleClick(event) {
  this.setState({activeDisplay: 'Key Q Pushed'})
  const sound = document.querySelector('#Q')
  sound.currentTime = 0;
  sound.play();
}

  render() {

    const drumPadItems = this.state.drumPad.map((item) =>
      <button key={item.id} className="btn btn-primary drum-pad" id={item.id} onClick={this.handleClick} >
      <audio className="clip" id={item.keyPress} src={item.audioFile} type="audio/wav"/>
      {item.keyPress}
      </button>)

  return (
    <div className="container"  id="drum-machine">
      <ReactFCCtest />
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
        <div className = "col-6 bg-light">
            {drumPadItems}
        </div>
        </section>
      </div>

    </div>
  );
}
}

export default App;
