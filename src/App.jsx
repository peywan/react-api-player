import React, { useState, useEffect } from 'react';
import Station from './Station';
import './App.css';

function App() {
    const [stations, setStations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://api.sr.se/api/v2/channels?format=json&size=100')
            .then(response => response.json())
            .then(data => {
                setStations(data.channels);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredStations = stations.filter(station =>
        station.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <h1>Sveriges Radio Player</h1>
            <input
                type="text"
                placeholder="Search for a station"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="station-list">
                    {filteredStations.map(station => (
                        <Station
                            key={station.id}
                            name={station.name}
                            image={station.image}
                            color={station.color}
                            audio={station.liveaudio.url}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
