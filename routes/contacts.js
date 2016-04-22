'use strict'

import express from 'express'

const { Router } = express
const contactsRouter = new Router()

const contacts = [
  {
    "Name": "Rowlf",
    "Title": "Pianist", "Phone": "251-415-8198",
    "Street": "3867 George Avenue", "City": "Mobile",
    "State": "AK",
    "Zipcode": "36602",
    "Email": "rowlf@Hensonllc.com",
    "Birthday": "4/3/1962",
    "Picture": "http://vignette3.wikia.nocookie.net/muppet/images/7/79/Rowlf2.jpg"
  },
  {
    "Name": "Kermit",
    "Title": "News Anchor",
    "Phone": "715-387-5896",
    "Street": "283 Abner Road",
    "City": "Marshfield",
    "State": "WI",
    "Zipcode": "54449",
    "Email": "kermit@Hensonllc.com",
    "Birthday": "6/27/1955",
    "Picture": "http://vignette3.wikia.nocookie.net/muppet/images/7/79/Kermit-the-frog.jpg"
  },
  {
    "Name": "Beaker",
    "Title": "Lab Assistant",
    "Phone": "860-257-6781",
    "Street": "2263 Hart Street",
    "City": "Wethersfield",
    "State": "CT",
    "Zipcode": "06109",
    "Email": "beaker@Hensonllc.com",
    "Birthday": "11/18/1977",
    "Picture": "http://vignette2.wikia.nocookie.net/muppet/images/0/05/Beaker.jpg"
  },
  {
    "Name": "Gonzo",
    "Title": "Stuntman",
    "Phone": "603-326-8798",
    "Street": "3061 Shearwood Forest Drive",
    "City": "Manchester",
    "State": "NH",
    "Zipcode": "03103",
    "Email": "gonzo@Hensonllc.com",
    "Birthday": "6/10/1970",
    "Picture": "http://vignette3.wikia.nocookie.net/muppet/images/e/eb/Gonzo2.jpg"
  }
]

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
