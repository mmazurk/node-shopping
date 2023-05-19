const app = require("./app")

	app.listen(3000, "127.0.0.1", function() {
		console.log('App on port 3000 ...')
		console.log('Lets party!')
		}) 
    
    
    // Note: on my PC I had to specify the IP address; on my Mac I don't need to do this
    // It likely has something to do with WSL
    // http://localhost:3000/test/
    // http://127.0.0.1:3000/test/