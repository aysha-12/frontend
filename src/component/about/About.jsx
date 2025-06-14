import React from 'react';
import Meet from '../../Hero/Meet-Relive/Meet';
import Treatments from '../../Hero/Treatments/Treatments';
import Clients from '../../Hero/Clients/Clients';

const About = () => {
    return (
        <div className='mb-30'>
            <div><Meet></Meet></div>
            <div><Treatments></Treatments></div>
            <div><Clients></Clients></div>
            
        </div>
    );
};

export default About;