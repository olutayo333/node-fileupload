const express = require("express");
const router = express.Router()

const{uploadFiles, getimgURL} = require('../controllers/user.controller')

router.post('/upload', uploadFiles)
router.get('/imgurl', getimgURL)

module.exports = router