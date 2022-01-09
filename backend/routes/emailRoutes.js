import express from 'express'
const router = express.Router()
import emailController from '../controllers/emailController.js'

router.route('/').post(emailController)

export default router