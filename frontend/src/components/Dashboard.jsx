import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [exercises, setExercises] = useState([]);
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [editExerciseId, setEditExerciseId] = useState(null);

    const userID = localStorage.getItem('userId');

    useEffect(() => {
        // Fetch all exercises
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                setExercises(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editExerciseId) {
            // Update exercise
            const exercise = {
                username: username,
                description: description,
                duration: duration,
                date: date,
                userId: userID
            };

            axios.post(`http://localhost:5000/exercises/update/${editExerciseId}`, exercise)
                .then(res => console.log(res.data));

            // Clear form fields and exit edit mode
            setUsername('');
            setDescription('');
            setDuration(0);
            setDate(new Date());
            setEditExerciseId(null);
        } else {
            // Create exercise
            const exercise = {
                username: username,
                description: description,
                duration: duration,
                date: date,
                userId: userID
            };

            axios.post('http://localhost:5000/exercises/add', exercise)
                .then(res => console.log(res.data));

            // Clear form fields
            setUsername('');
            setDescription('');
            setDuration(0);
            setDate(new Date());
        }
    };

    const handleEdit = (id, exercise) => {
        setEditExerciseId(id);
        setUsername(exercise.username);
        setDescription(exercise.description);
        setDuration(exercise.duration);
        setDate(exercise.date);
    };

    const handleDelete = (id) => {
        // Delete exercise
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log(res.data));

        // Update exercises state
        setExercises(exercises.filter(exercise => exercise._id !== id));
    };

    return (
        <>
            <div>
                <h1>Exercise Dashboard</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="number" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <button type="submit">{editExerciseId ? 'Update Exercise' : 'Add Exercise'}</button>
                </form>
                <ul>
                    {exercises.map(exercise => (
                        <li key={exercise._id}>
                            {exercise.username} - {exercise.description} - {exercise.duration} - {exercise.date.substring(0, 10)}{' '}
                            <button onClick={() => handleEdit(exercise._id, exercise)}>Edit</button>{' '}
                            <button onClick={() => handleDelete(exercise._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Dashboard;
