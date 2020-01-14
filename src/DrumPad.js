import React from 'react';

function DrumPad() {

    const DRUM_PAD = [{
            keyCode: 81,
            keyPress: 'Q',
            id: 'drum-press-1',
            audioFile: 'https://'
        },
        {
            keyCode: 87,
            keyPress: 'W',
            id: 'drum-press-2',
            audioFile: 'https://'
        },
        {
            keyCode: 69,
            keyPress: 'E',
            id: 'drum-press-3',
            audioFile: 'https://'
        },
        {
            keyCode: 65,
            keyPress: 'A',
            id: 'drum-press-4',
            audioFile: 'https://'
        },
        {
            keyCode: 83,
            keyPress: 'S',
            id: 'drum-press-5',
            audioFile: 'https://'
        },
        {
            keyCode: 68,
            keyPress: 'D',
            id: 'drum-press-6',
            audioFile: 'https://'
        },
        {
            keyCode: 90,
            keyPress: 'Z',
            id: 'drum-press-7',
            audioFile: 'http://'
        },
        {
            keyCode: 88,
            keyPress: 'X',
            id: 'drum-press-8',
            audioFile: 'https://'
        },
        {
            keyCode: 67,
            keyPress: 'C',
            id: 'drum-press-9',
            audioFile: 'https://'
        }
    ]

    const drumPadItems = DRUM_PAD.map((item) =>
        <button key={item.id} className="btn btn-primary drum-pad" id={item.id}>
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