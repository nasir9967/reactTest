import React, { useEffect, useState } from 'react';



const Wheather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Delhi');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=130176f0f4dd59855c1bc58e01b86437`;
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    return (
        <div className="box">
             <div>Current Wheather developed by Tabish & Yashar</div>
            <div className="inputData">
                <input type="search" className="inputField" onChange={(event) => {
                    setSearch(event.target.value)

                }} />
            </div>           
            {                
                !city ? (<p>Data not found</p>) :
                    (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view">{search}</i>
                                </h2>
                                <h1 className="temp">
                                   {city.temp}°Cel
                                </h1>
                                <h3 className="tempmin_max"> Min: {city.temp_min} Max: {city.temp_max}°Cel </h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )
            }

        </div>

    )

}

export default Wheather;