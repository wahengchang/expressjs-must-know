# express security 

## Content Security Policy (CSP) 
 - It is a promising defense against the risk and impact of XSS attacks. 
 - It works by setting whitelists in the __**Content-Security-Policy**__ response header to define sources of trusted content.

#### Influence file
1. JavaScript
2. Stylesheets
3. Images
4. AJAX, WebSockets, etc.
5. Fonts
6. Plugins
7. HTML5 Media Elements
8. Frames

```js

app.use('/style',csp({
    directives: {
        styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
}));
app.get('/style', function(req, res) {
    var path    = require("path");
    res.sendFile(path.join(__dirname+'/styleSrc.html'));
});
```

```js
<html>
    <head>
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
    </head>
    ...
</html>

```
![image](https://user-images.githubusercontent.com/5538753/30261487-70f58710-96ff-11e7-9e99-c44cbd8dd6b6.png)


## Reference:
 - [http://scottksmith.com/blog/2014/09/21/protect-your-node-apps-noggin-with-helmet/](http://scottksmith.com/blog/2014/09/21/protect-your-node-apps-noggin-with-helmet/)




