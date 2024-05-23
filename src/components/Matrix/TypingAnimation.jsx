// src/TypingAnimation.js
import React from 'react';
import TypingEffect from 'react-typing-effect';

const TypingAnimation = () => {
    return (
        <div>
            
        <div style={{ textAlign: 'center', marginTop: '50px' }} className='grid text-3xl space-y-2'>
            <TypingEffect
                text={['Wake Up ...']}
                speed={100}
                eraseSpeed={10}
                eraseDelay={20000}
                typingDelay={500}
                />
            <TypingEffect
                text={['The Matrix Has You ...']}
                speed={50}
                eraseSpeed={10}
                eraseDelay={20000}
                typingDelay={1500}
                />
            <TypingEffect
                text={['Follow The Truth ...']}
                speed={75}
                eraseSpeed={10}
                eraseDelay={20000}
                typingDelay={2500}
                />
        </div>
    </div>
    );
};

export default TypingAnimation;
