const express = require("express")
const ExpressError = require("./expressError")
const shoppingRoutes = require("./shoppingRoutes")
const morgan = require("morgan")

const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded( {extended: true }));
app.use(express.json());
app.use("/home", shoppingRoutes);

// This is a 404 handler
app.use((req, res, next) => {
	const e = new ExpressError("Page Not Found", 404)
	next(e)
	})

// This is a genereal error handler
app.use(function (err, req, res, next) { 
	let status = err.status || 500;
	let message = err.msg;
	  return res.status(status).json({
	    error: { message, status }
	  });
	});

module.exports = app; 