import React from 'react';
import Slider from './slider/Slider';
import Meet from './Meet-Relive/Meet';
import Treatments from './Treatments/Treatments';
import Clients from './Clients/Clients';

import Send from '../Get-in/Send';
import Card from '../component/Card/Card';

const Hero = () => {
    return (
        <div className=''>
            <div><Slider></Slider></div>
            <div><Meet></Meet></div>
            <div><Card></Card></div>
            <div><Treatments></Treatments></div>
            <div><Clients></Clients></div>
            <div><Send></Send></div>
        </div>
    );
};

export default Hero;