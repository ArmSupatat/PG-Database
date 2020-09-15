'use strict'

const { test } = use('Test/Suite')('Client Validator')
const clientValidator = require('../../service/ClientValidator')

test('should return an error if there is no username', async ({ assert }) => {
  const validatedData = await clientValidator({
    username: "",
    email: "right@email.com",
    password: "12345678",
    contact: "My discord is Johnthesheep"
  })
  assert.equal(validatedData.error.length, 1)
})

test('should return an error when enter wrong email', async ({ assert }) => {
  const validatedData = await clientValidator({
    username: "Johny",
    email: "Wrong mail",
    password: "12345678",
    contact: "My discord is Johnthesheep"
  })
  assert.equal(validatedData.error.length, 1)
})

test('should return an error when password does not reach minimum 8 digit', async ({ assert }) => {
  const validatedData = await clientValidator({
    username: "Johny",
    email: "right@email.com",
    password: "12345",
    contact: "My discord is Johnthesheep"
  })
  assert.equal(validatedData.error.length, 1)
})
