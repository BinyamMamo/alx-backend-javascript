import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

const appController = new AppController();
const studentsController = new StudentsController();

router.get('/', appController.getHomePage);
router.get('/students', studentsController.getAllStudents);
router.get('/students/:major', studentsController.getAllStudentsByMajor);

export default router;
