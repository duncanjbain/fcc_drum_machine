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


    const drum_items = DRUM_PAD.map((item, key) => {
        return <DrumPad
        id = {
            item.id
        }
        audioClip = {
            item.audioFile
        }
        keyPress = {
            item.keyPress
        }
        keyCode = {
            item.keyCode
        }
        />
    })
    return ( 
        <div className = "col-6 bg-light">
            {drum_items}
        </div>
    )
}

export default DrumPad