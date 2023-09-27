import express from 'express'
import { createFram, deleteFram, getAllFram, getFram, updateFram } from '../controllers/GestionController.js'

const router = express.Router()

router.get('/', getAllFram)
router.get('/:id', getFram)
router.post('/', createFram)
router.put('/:id', updateFram)
router.delete('/:id', deleteFram)

export default router