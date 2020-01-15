import React from 'react';

function DrumPad(props) {

    

    const drumPadItems = props.drumPad.map((item) =>
        <button key={item.id} className="btn btn-primary drum-pad" id={item.id} onClick={props.handleClick}>
            <audio id={item.id} src={item.audioFile} />
            {item.keyPress}
            </button>
    );

    return ( 
        <div className = "col-6 bg-light">
            {drumPadItems}
        </div>
    )
}

export default DrumPad