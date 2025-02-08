import React, { useState, useEffect } from 'react';

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/results')
            .then((response) => response.json())
            .then((data) => setResults(data))
            .catch((error) => console.error('Error fetching results:', error));
    }, []);

    return (
        <div>
            <h2>Election Results by Department</h2>
            {results.map((result, index) => (
                <div key={index}>
                    <h3>Department: {result.department}</h3>
                    <ul>
                        {result.votes.map((vote, idx) => (
                            <li key={idx}>{vote.party}: {vote.count} votes</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Results;

