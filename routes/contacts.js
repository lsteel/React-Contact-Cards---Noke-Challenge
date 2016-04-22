'use strict'

import express from 'express'

const { Router } = express
const contactsRouter = new Router()

const contacts = []

contactsRouter.get('/', (req, res, next) => {
  res.json(contacts)
})

export default contactsRouter
