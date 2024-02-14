import React from 'react';
import Header from '../Header/Header.js';
import './Skills.css'; // Assuming you have a CSS module for styling

const Skill = ({ name, level }) => {
    return (
        <div className="skill">
            <p>{name}</p>
            <div className="rating">
                {[1, 2, 3, 4, 5].map((value) => (
                    <div key={value} className={`block ${value <= level ? 'highlighted' : ''}`}></div>
                ))}
            </div>
        </div>
    );
};

const Skills = ({ skills }) => {
    return (
        <div className="skills-section">
            <Header title="Skills" />
            {skills.map(skill => (
                <Skill key={skill.name} name={skill.name} level={skill.level} />
            ))}
        </div>
    );
};

export default Skills;
