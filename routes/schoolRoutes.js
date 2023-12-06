const express = require('express');
const {createSchool,updateSchool,getSchool,getSchoolById,deleteSchool} = require('../controllers/schoolControllers')
const bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());

router.post('/schools',createSchool)
router.put('/schools',updateSchool)
router.get('/schools',getSchool)
router.get('/schools/:id',getSchoolById)
router.delete('/schools/:id',deleteSchool)


module.exports = router;
