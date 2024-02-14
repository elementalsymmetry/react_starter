// Training.js
import React from 'react';
import Header from '../Header/Header.js';

const Training = ({ trainingData }) => {
    console.log(trainingData);
    return (
        <div>
            <Header title="Training" />
            <ul>
                {trainingData.map((training, index) => (
                    <li key={index}>{training}</li>
                ))}
            </ul>
        </div>
    );
};

export default Training;
