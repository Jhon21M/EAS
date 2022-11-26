module.exports = (app, passport) => {

	//login view
	app.get('/Inicio-sesion', (req, res) => {
		res.render('Inicio-sesion', {
			message: req.flash('loginMessage')
		});
	});
	app.get('/Registrar', (req, res) => {
		res.render('Registrar', {
			message: req.flash('loginMessage')
		});
	});
	
	app.get('/', (req, res) => {
		res.render('index', {
			message: req.flash('loginMessage')
		});
	});
     app.get('/Servicio', (req, res) => {
		res.render('Servicio', {
			message: req.flash('loginMessage')
		});
	});
	app.get('/contacto', (req, res) => {
		res.render('contacto', {
			message: req.flash('loginMessage')
		});
	});
	app.get('/Planes', (req, res) => {
		res.render('Planes', {
			message: req.flash('loginMessage')
		});
	}); 
	
	
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	// signup view
	app.get('/signup', (req, res) => {
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true // allow flash messages
	}));

	//profile view
	app.get('/profile', isLoggedIn, (req, res) => {
		res.render('profile', {
			user: req.user
		});
	});

	// logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}
