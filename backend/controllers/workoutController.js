const { default: mongoose } = require('mongoose')
const Workout = require('../models/Workout')
const { request } = require('express')

// Get all
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// Get by id
const getWorkoutById = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout not found'}) 
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: 'Workout not found'})
    }
    return res.status(200).json(workout)
}

// Create
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message} )
    }
}

// Update
const updateWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout not found'})
    }
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'Workout not found'})
    }
    return res.status(200).json(workout)
}

// Delete
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout not found'})
    }
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(400).json({error: 'Workout not found'})
    }
    return res.status(200).json(workout)
}

module.exports = ({
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    deleteWorkout,
    updateWorkout
})