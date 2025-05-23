import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function routeConfig(app) {
  const router = express.Router();
  
  router.get('/', AppController.getHomepage);
  router.get('/students', StudentsController.getAllStudents);
  router.get('/students/:major', StudentsController.getAllStudentsByMajor);
  
  app.use(router);
}

export default routeConfig;