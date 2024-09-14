import {WorkoutContext} from "../context/WorkoutContext.jsx";
import {useContext} from "react";

import React from 'react';

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)

    if(!context){
        throw Error('useWorkoutsContext must be used inside a WorkoutContextProvider')
    }

    return context;
}
