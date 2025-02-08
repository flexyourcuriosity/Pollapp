import React, { useState } from 'react';

const PollForm = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [party, setParty] = useState('DMK');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/poll/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, department, party }),
        });

        if (response.ok) {
            setSubmitted(true);
        } else {
            alert('Error submitting your vote!');
        }
    };

    return (
        <div>
            <h1>Tamil Nadu State Election 2026 Prediction</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        Department:
                        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                            <option value="CSD">CSD</option>
                            <option value="CYS">CYS</option>
                            <option value="AIDS B">AIDS B</option>
                        </select>
                    </label>
                    <label>
                        Party:
                        <select value={party} onChange={(e) => setParty(e.target.value)}>
                            <option value="DMK">Secular Progressive Alliance (DMK)</option>
                            <option value="AIADMK">AIADMK Alliance</option>
                            <option value="BJP">National Democratic Alliance (BJP)</option>
                            <option value="TVK">Tamilaga Vettri Kazhagam (TVK)</option>
                            <option value="NTK">Naam Tamilar Katchi (NTK)</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>Thank you for voting, {name}! Your vote for {party} from the {department} department has been recorded.</p>
            )}
        </div>
    );
};

export default PollForm;

