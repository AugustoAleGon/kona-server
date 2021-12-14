const express = require('express');

const router = express.Router();
const data = require('../data');

router.get('/all', (req, res) => {
	const usersKey = Object.keys(data);
	const teams = [];
	usersKey.forEach(id => {
		if (data[id].teams) {
			const teamsId = Object.keys(data[id].teams);
			teamsId.forEach(teamId => teams.push(data[id].teams[teamId]))
		}
	});
	res.status(200).json(teams);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	if (id) {
		const split = id.split('&');
		if(split.length > 1) {
			const team = data[split[0]].teams[split[1]]
			if(team) {
				res.json(team);
			} else {
				res.send('Team id not found');
			}
		} else {
			res.send('Team id not found');
		}
	} else {
		res.send('Id was not provided');
	}
})

module.exports = router;
