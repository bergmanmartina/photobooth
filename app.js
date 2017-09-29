const express = require('express')
const app = express()
const path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	console.log ('photobooth')
res.render('index')
})
const port = process.env.PORT || 3000 {
console.log('hej hej')
}

app.use(express.static(path.join(__dirname, 'public')))



//app.listen(3000, function ()