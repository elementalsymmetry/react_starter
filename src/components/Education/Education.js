// Education.js
import React from 'react';
import Header from '../Header/Header.js';

const Education = ({ educationData }) => {
    return (
        <div>
            <Header title="Education" />

            {educationData.map((edu, index) => (
                <div key={index}>
                    <p>{edu.attended} {edu.degree} - {edu.institution} - <em>{edu.location}</em></p>
                </div>
            ))}
        </div>
    );
};

export default Education;
