const express = require('express')
const app = express()
const path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	console.log ('photobooth')
res.send('index')
})
app.listen(3000, function () {
console.log('Testing Testing')
})

app.use(express.static(path.join(__dirname, 'public')))