var express = require('express')
var app = express()

app.get('/slow', function (req, res) {
    setTimeout(function() {
        res.send('Waited 3s : Hello World!')        
    }, 3000);
})

app.get('/fast', function (req, res) {    
    
    res.set('Content-Type', 'text/html; charset=utf-8')

    const FIRST = `<!doctype html><html lang='zh-Hant-TW'>`

    res.write(FIRST)

    // force flush for gzip, but has DeprecationWarning
    if (res.flush)   res.flush()

    setTimeout(function() {
        res.end('First bit first: Hello World!')
    }, 3000);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})