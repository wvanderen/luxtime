// const Hapi = require('hapi');
// const Inert = require('inert');
// const Path = require('path');
//
// let connection = {
//     port: process.env.PORT || 3000,
//     host: process.env.IP || 'localhost'
// };
//
// let routes = [
//     {
//         method: 'GET',
//         path: '/scripts/{path*}',
//         handler: {
//             directory: {
//                 path: Path.join(__dirname, '/app/scripts')
//               }
//         }
//     },
//     {
//         method: 'GET',
//         path: '/styles/{path*}',
//         handler: {
//             directory: {
//                 path: Path.join(__dirname, '/app/styles')
//               }
//         }
//     },
//     {
//         method: 'GET',
//         path: '/assets/{path*}',
//         handler: {
//             directory: {
//                 path: Path.join(__dirname, '/app/assets')
//               }
//         }
//     },
//     {
//         method: 'GET',
//         path: '/templates/{path*}',
//         handler: {
//             directory: {
//                 path: Path.join(__dirname, '/app/templates')
//               }
//         }
//     },
//     {
//         method: 'GET',
//         path: '/{path*}',
//         handler: {
//             file: Path.join(__dirname, '/app/index.html')
//         }
//     }
// ]
//
// let server = new Hapi.Server();
// server.connection(connection);
//
// server.register([Inert], (err) => {
//     if (err) {
//         throw err;
//     }
//
//     server.route(routes);
// });
//
// server.start(() => {
//     console.log('Server started at: ' + server.info.uri);
// });
//
// server.on('response', function (request) {
//     if(request.url.path.includes('templates')) {
//         console.log();
//         console.log(new Date().toString() + ':  ' + request.method.toUpperCase() + ' - ' + request.url.path + ' - (' + request.response.statusCode + ')');
//     }
// });
//
// module.exports = server;
//
// var express = require('express');
// var app = express();
// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + '/static'));
// // Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || 8000);



var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
