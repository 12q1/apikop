import React, { Component } from 'react';
import TextScramble from '@twistezo/react-text-scramble';

const scrambleTexts = [
    'Bruteforce Freelancing',
    'Rapid Prototyping',
    'Responsive Websites',
    'Efficient Code',
    'Test Driven Development',
    'Bold Concepts',
    'Continously Integrating',
    'Generating Buzzwords',
    'Keeping It Simple',
    'Material Design',
    'Flexing Boxes',
    'Fully Stacked',
    'No Bullsh*t',
    'Typing Dynamically',
    'Thinking BIG',
    'Joining Tables',
    'Edgy Cases',
    'Scrumbags',
    'Bashful Scripting',
    'Printing Statements',
    '[objectifying Objects]',
    'Docking Containers',
    'Infinitely Looping',
    'Commiting Changes',
    'Escaping VIM',
    'Reproducing Errors',
    'Forgetting Passwords',
    'Constructing Components',
    'Forcing Pushes',
    'Describing Functions',
    'Smooth Animations',
    'Consuming APIs',
    'Extra Caffinated'
];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class TextScrambler extends Component {
    render() {
        return (
            <div className='scrambler'>
                <span className='blinker'>_</span>
                <TextScramble
                    texts={shuffle(scrambleTexts)}
                    letterSpeed={5}
                    nextLetterSpeed={100}
                    pauseTime={1500}
                />
            </div>
        )
    }
}

export default TextScrambler;