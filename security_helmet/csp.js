// Load required modules
var express = require('express');
var helmet = require('helmet');
var csp = require('helmet-csp')

// Create our Express application
var app = express();

// Implement CSP with Helmet
// app.use('/',csp({
//     directives: {
//         defaultSrc: ["'self'", 'default.com'],
//         styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com'],
//         imgSrc: ['img.com', 'data:'],
//         sandbox: ['allow-forms', 'allow-scripts'],
//         reportUri: '/report-violation',
//     }
// }));


// Simple endpoint
app.use('/style',csp({
    directives: {
        styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
}));
app.get('/style', function(req, res) {
    var path    = require("path");
    res.sendFile(path.join(__dirname+'/styleSrc.html'));
});

// Start the server
app.listen(3000);