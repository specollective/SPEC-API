const { application } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 5555
const database = require('./database');
const startupMessage = 'SPEC API starting up...'

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', require('./routes'))

app.get('/', (req, res) => res.send('SPEC API'))
app.get('/health', (req, res) => res.json({ status: 'UP' }))

for (let line of startupMessage.split("\n")) {
	console.log(line)
}

database.testSetup()

app.listen(port, () => console.log(`spec-api listening on port ${port}!`))
