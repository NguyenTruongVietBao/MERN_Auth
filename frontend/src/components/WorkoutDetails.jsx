import React from 'react';
import axios from "axios";
import useWorkoutsContext from "../hooks/useWorkoutsContext.jsx";

function WorkoutDetails({workout, index, onRemoveWorkout }) {
    // const {dispatch} = useWorkoutsContext();
    // const handleDelete = async () => {
    //     const res = await axios.delete('http://localhost:4000/api/workouts/'+workout._id)
    //         .then(() => {
    //
    //             dispatch({type: 'DELETE_WORKOUT', payload: res})
    //             console.log(workout)
    //         })
    //         .catch((err) => {
    //             console.log('Error deleting: ', workout._id)
    //         })
    // }

    const handleDelete = async () => {
        try {
            await axios.delete('http://localhost:4000/api/workouts/' + workout._id);
            alert('Workout deleted successfully');
            onRemoveWorkout(workout._id); // Call the parent function to update the state
        } catch (err) {
            console.log('Error deleting: ', workout._id);
        }
    };

    return (
        <div className="flex flex-col p-4 bg-white shadow-lg rounded-md">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="mb-2 text-lg font-bold text-red-400 mr-2">{index + 1}.</div>
                    <div className="mb-2 text-lg font-bold text-blue-400">{workout.title}</div>
                </div>
                <div className="flex gap-4">
                    <button onClick={handleDelete} className="p-1 rounded-lg bg-red-400 font-medium">Delete</button>
                    <button className="p-1 rounded-lg bg-yellow-400 font-medium">Update</button>
                </div>
            </div>
            <div className="mb-2"><strong>Id: </strong>{workout._id}</div>
            <div className="mb-2"><strong>Load: </strong>{workout.load}</div>
            <div className="mb-2"><strong>Reps: </strong>{workout.reps}</div>
            <div className="mb-2"><strong>Create At: </strong>{workout.createdAt}</div>
        </div>
    );
}

export default WorkoutDetails;