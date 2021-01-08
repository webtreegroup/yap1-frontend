const express = require('express')

const app = express()
const PORT = 3000

app.get('*', (req, res) => {
    const patternForStatic = new RegExp('\.(js|css)$', 'g')
    if (patternForStatic.test(req.path)) {
        res.sendFile(__dirname + req.path)
    }
    else {
        res.sendFile(__dirname + '/index.html')
    }
})

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})