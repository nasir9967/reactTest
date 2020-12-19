import React from 'react';
import './App.css';

function card(){
    return ( 
        <div className="maincontainer" >  
        <div className="cards">
            <div className="card">
            <img alt="test" src="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT5q21jDh1FWHeCuDS53sHeXCzXeW_Snsty4N_1JypN_J-scsfXKqeNShJNd9rZkZZWFzg8ExYkM97JlGPp24WBtvgv6P5RPybAYOxLTz_drG_4e0qpzqFHogpAqW0SiYq0id14Mtmt__SxcbYdEsaJPxkLoXA.jpg?r=0e0" attr="" className="card__img" />
            <span className="card__category"> category name</span>
            <div className="card__info">
                <h3 className="card__title">Title</h3>
                <a href="https://therappo.com" targe="_blank">
                <button className="btn btn-primary pull-right">watch Now</button></a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default card;