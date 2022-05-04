import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;
    // const apiKey = '14344ba9e89ef7b6496eb2d76a0c293b';

    return (
        <div className='app'>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <p>London</p>
                    </div>
                </div>
                <div className='middle'>
                    <div className='temperature'>
                        <h1>15 C</h1>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='description'>
                        <p>Cloudy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
