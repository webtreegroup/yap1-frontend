import express from 'express'
import path from 'path'

const app: express.Application = express()
const PORT = 3000
const __dirname = path.resolve()

app.get('*', (req, res) => {
    const pattern = new RegExp('\.(js|css)$', 'g')

    if (pattern.test(req.path)) {
        res.sendFile(__dirname + '/static/' + req.path)
    } else {
        res.sendFile(__dirname + '/static/index.html')
    }
})

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})
