import React from 'react';
import './Station.css';

const Station = ({ name, image, color, audio }) => {
    return (
        <div className="station" style={{ backgroundColor: color }}>
            <img src={image} alt={`${name} logo`} />
            <div className="station-details">
                <h2>{name}</h2>
                <audio controls>
                    <source src={audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default Station;
