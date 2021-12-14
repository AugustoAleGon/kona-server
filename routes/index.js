const usersRouter = require('./usersRouter');
const teamsRouter = require('./teamsRouter');

function routerApi(app) {
	app.use('/users', usersRouter);
	app.use('/teams', teamsRouter);
};

module.exports = routerApi;
