'use strict'

import express from 'express'

const { Router } = express
const contactsRouter = new Router()

const contacts = []

contactsRouter.get('/', (req, res, next) => {
  res.json(contacts)
})

contactsRouter.post('/', (req, res, next) => {
  if (!req.body.name) {
    return next(new Error('You must include a `name` in the body.'))
  }
  if (typeof req.body.name !== 'string') {
    return next(new Error('Then `name` property must be a string.'))
  }

  let newContactId = contacts.push({
    Name: req.body.Name,
    Title: req.body.Title,
    Phone: req.body.Phone,
    Street: req.body.Street,
    City: req.body.City,
    State: req.body.State,
    Zipcode: req.body.Zipcode,
    Email: req.body.Email,
    Birthday: req.body.Birthday,
    Picture: req.body.Picture
  })

  res.json(contacts[newContactId])
})

export default contactsRouter
