const expres = require('express');
const app = expres();
const path = require('paht');

app.use(expres.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*',function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});