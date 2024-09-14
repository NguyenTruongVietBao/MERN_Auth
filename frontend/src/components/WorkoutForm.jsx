import React from 'react';
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
// import useWorkoutsContext from "../hooks/useWorkoutsContext.jsx";

function WorkoutForm({ addWorkout }) {
    // const {dispatch} = useWorkoutsContext();
    const schema = yup.object().shape({
        title: yup.string(),
        reps: yup.number().min(1, 'reps greater than 1').typeError('Reps must be a number'),
        load: yup.number().min(1, 'load greater than 1').typeError('Load must be a number')
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/api/workouts', data);
            alert('Workout added successfully');
            addWorkout(response.data);
        } catch (error) {
            console.error("There was an error creating the workout:", error);
        }
    };
    // const onSubmit = (data) => {
    //     axios.post('http://localhost:4000/api/workouts', data)
    //         .then(()=>{
    //             dispatch({type: 'CREATE_WORKOUT', payload: data})
    //             console.log(data)
    //             alert('Add workouts successfully');
    //         })
    // };

    return (
        <div className="border-2 flex flex-col items-center px-2 m-auto">
            <h1 className="text-lg font-medium text-green-600">Create Workouts</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-1">
                <input type="text" placeholder="Title..." {...register("title")} />
                <input type="number" placeholder="Reps..." {...register("reps")} />
                <input type="number" placeholder="Load..." {...register("load")} />
                <div className="text-red-500">
                    <p>{errors.title?.message}</p>
                    <p>{errors.reps?.message}</p>
                    <p>{errors.load?.message}</p>
                </div>
                <button type="submit" className="bg-green-400 rounded-lg p-1 mb-1 font-medium">Create</button>
            </form>
        </div>
    );
}

export default WorkoutForm;