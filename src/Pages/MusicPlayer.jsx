import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const playSound = () => {
        const audio = new Audio('/audio/Select Sound Effect.mp3');
        audio.play();
      };

    return (
        <div>
            {/* Elemen audio untuk memuat musik */}
            <audio
                ref={audioRef}
                src="/audio/velvet.mp3"
                loop
            ></audio>

            {/* Tombol Play/Pause dengan Tailwind CSS */}
            <button
                onMouseEnter={playSound}
                onClick={togglePlayPause}
                className="
                fixed
                bottom-0 
                right-0 
                m-5 
                p-2
                text-white 
                rounded-xl 
                shadow-lg 
                z-50
                hover:scale-125"
            >
                {isPlaying ? (
                    <FontAwesomeIcon icon={faCirclePause} size="2x" />
                ) : (
                    <FontAwesomeIcon icon={faCirclePlay} size="2x" />
                )}
            </button>
        </div>
    );
};

export default MusicPlayer;
