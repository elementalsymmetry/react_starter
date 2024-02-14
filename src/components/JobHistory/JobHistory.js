// JobHistory.js
import React from 'react';
import Header from '../Header/Header.js';
import './JobHistory.css'; // Assuming you will have a separate CSS for this component

const Job = ({ job }) => {
    const isUrl = (string) => string.startsWith('http://') || string.startsWith('https://');

    const renderResponsibility = (responsibility, key) => {
        if (Array.isArray(responsibility)) {
            return (
                <ul className="list-inside" key={key}>
                    {responsibility.map((item, idx) => {
                        return isUrl(item)
                            ? <li key={idx} className="list-arrow"><a href={item} target="_blank" rel="noopener noreferrer">{item}</a></li>
                            : <li key={idx} className="list-arrow">{item}</li>;
                    })}
                </ul>
            );
        } else {
            return isUrl(responsibility)
                ? <li className="list-disc list-inside" key={key}><a href={responsibility} target="_blank" rel="noopener noreferrer">{responsibility}</a></li>
                : <li className="list-disc list-inside" key={key}>{responsibility}</li>;
        }
    };

    return (
        <div className="job mb-4">
            <h3 className="font-bold">{job.position} - {job.company} - <em>{job.location}</em></h3>
            <p className="my-1">{job.startDate} - {job.endDate}</p>
            <ul>
                {job.responsibilities.map((responsibility, index) => (
                    <React.Fragment key={index}>
                        {renderResponsibility(responsibility)}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

const JobHistory = ({ jobHistory }) => {
    return (
        <div className="job-history">
            <Header title="Employment History" />
            {jobHistory.map((job, index) => (
                <Job key={index} job={job} />
            ))}
        </div>
    );
};

export default JobHistory;
