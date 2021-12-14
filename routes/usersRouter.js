const express = require('express');

const router = express.Router();
const data = require('../data');

router.get('/all', (req, res) => {
	res.status(200).json(data);
});

router.get('/:id', (req, res) => {
	const {id} = req.params;
	res.status(200).json(data[id]);
})

module.exports = router;
