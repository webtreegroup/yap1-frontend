import express from 'express'

const app: express.Application = express()
const PORT = 3000

app.use(express.static('./static'))

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})
