import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=14344ba9e89ef7b6496eb2d76a0c293b`;

    const getLocation = async () => {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);

        setLocation('');
    };

    return (
        <div className='app'>
            <div className='container'>
                <div className='top'>
                    <form>
                        <label>
                            <input type='text' placeholder='Enter City...' />
                        </label>
                        <input
                            className='button'
                            type='submit'
                            onClick={getLocation}
                            value='Get Weather'
                        />
                    </form>
                </div>
                <div className='middle'>
                    <div className='location'>
                        <p>{data.name}</p>
                    </div>
                    <div className='temperature'>
                        {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
                    </div>
                </div>
                <div className='bottom'>
                    <div className='description'>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
