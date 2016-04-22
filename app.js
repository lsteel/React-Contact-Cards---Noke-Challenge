'use strict'

import config from 'config'
import express from 'express'

const app = express()
const PORT = config.port

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
