import React , {useEffect, useState} from 'react';
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails.jsx";
import WorkoutForm from "../components/WorkoutForm.jsx";
import useWorkoutsContext from "../hooks/useWorkoutsContext.jsx";

function Home(props) {
    // const {workouts, dispatch} = useWorkoutsContext();
    // useEffect(() => {
    //     const fetchWorkouts = async () => {
    //         try {
    //             const res = await axios.get('http://localhost:4000/api/workouts');
    //             dispatch({type: 'SET_WORKOUTS', payload: res.data})
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };
    //     fetchWorkouts();
    // }, [dispatch]);

    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/workouts');
                setWorkouts(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchWorkouts();
    }, []);
    const workoutsAfterDelete = (id) => {
        setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout._id !== id));
    };
    const workoutsAfterCreate = (newWorkout) => {
        setWorkouts([newWorkout, ...workouts]); // Add the new workout to the list
    };
    return (
        <div className={'container mx-auto  '}>
            <div className="grid grid-cols-3 gap-4">
                <WorkoutForm addWorkout={workoutsAfterCreate} />
                {workouts && workouts.map((workout, index) => (
                    <WorkoutDetails key={index} workout={workout} index={index} onRemoveWorkout={workoutsAfterDelete} />
                ))}
            </div>
        </div>
    );
}

export default Home;
