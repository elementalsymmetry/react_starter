// PersonalDetails.js
import React from 'react';
import './PersonalDetails.css'; // Assuming you will have a separate CSS file for styling

const PersonalDetails = ({ profile }) => {
    return (
<div className="personal-details space-y-2">
    <div className="flex items-start">
        <i className="fas fa-envelope text-blue-500 mt-1"></i>
        <div className="ml-4">
            <span className="text-gray-600 text-sm">Email:</span>
            <p className="font-semibold">{profile.email1}</p>
        </div>
    </div>

    <div className="flex items-start">
        <i className="fas fa-mobile-alt text-green-500 mt-1"></i>
        <div className="ml-4">
            <span className="text-gray-600 text-sm">Mobile:</span>
            <p className="font-semibold">{profile.phone}</p>
        </div>
    </div>

    <div className="flex items-start">
        <i className="fab fa-linkedin text-blue-700 mt-1"></i>
        <div className="ml-4">
            <span className="text-gray-600 text-sm">LinkedIn:</span>
            <p className="font-semibold">
                <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                linkedin.com/in/{profile.linkedin}
                </a>
            </p>
        </div>
    </div>

    <div className="flex items-start">
        <i className="fab fa-github text-black mt-1"></i>
        <div className="ml-4">
            <span className="text-gray-600 text-sm">GitHub:</span>
            <p className="font-semibold">
                <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                    github.com/{profile.github}
                </a>
            </p>
        </div>
    </div>

    <div className="flex items-start">
        <i className="fas fa-file-alt text-yellow-600 mt-1"></i>
        <div className="ml-4">
            <span className="text-gray-600 text-sm">Resume:</span>
            <p className="font-semibold">
                <a href={`http://${profile.github}.github.io/${profile.resume}`} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-700">
                    {profile.github}.github.io/{profile.resume}
                </a>
            </p>
        </div>
    </div>
</div>
    );
};

export default PersonalDetails;
