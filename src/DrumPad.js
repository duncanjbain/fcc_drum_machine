import React, { Component } from 'react';

class DrumPad extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      }
    
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
      }

      handleKeyPress = event => {
          if(event.keyCode === this.props.keyPressCode) {
              this.beatSound.play();
              this.props.changeActiveDisplay(this.props.id);
          }
      }

      handleClick = () => {
          this.beatSound.play();
          this.props.changeActiveDisplay(this.props.id);
      }

      render() {
        
          return (
    <button key={this.props.id} className="btn btn-primary drum-pad" id={this.props.id} onClick={this.handleClick} >
    <audio  ref={ref => (this.beatSound = ref)} className="clip" id={this.props.keyPress} src={this.props.source} type="audio/wav"/>
    {this.props.keyPress}
    </button>
          )
      }

}

export default DrumPad