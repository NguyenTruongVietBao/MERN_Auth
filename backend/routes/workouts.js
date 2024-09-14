const express = require('express');
const Workout = require('../models/Workout');
const {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router();

// Get all
router.get('/', getAllWorkouts)

// Get by id
router.get('/:id', getWorkoutById)

// Create
router.post('/', createWorkout)

// Update
router.put('/:id', updateWorkout)

// Delete
router.delete('/:id', deleteWorkout)

module.exports = router;