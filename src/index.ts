const { application } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 5555
const database = require('./database');
const startupMessage = 'SPEC API starting up...'

console.log('ENV', process.env.NODE_ENV)
console.log(startupMessage)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', require('./app/routes'))

app.get('/', (req: any, res: any) => res.send('SPEC API'))
app.get('/health', (req: any, res: any) => res.json({ status: 'UP' }))

database.testSetup()

app.listen(port, () => console.log(`spec-api listening on port ${port}!`))
