'use strict'

import express from 'express'
import contacts from './contacts'

const { Router } = express
const api = new Router()

api.use('/contacts', contacts)

export default api
