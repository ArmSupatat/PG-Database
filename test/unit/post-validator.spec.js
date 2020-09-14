'use strict'

const { test } = use('Test/Suite')('Post Validator')
const postValidator = require('../../service/PostValidator')

test('should return an error when party_size is not a number', async ({ assert }) => {
  const validatedData = await postValidator({
      party_size: "not a number",
      title:"Minecraft",
      details:"Let's play on my server"
  })
  assert.equal(validatedData.error.length, 1)
})

test('should return no error if all field is correct', async ({ assert }) => {
  const validatedData = await postValidator({
      party_size: "5",
      title:"Minecraft",
      details:"Let's play on my server"
  })
  assert.equal(validatedData.error, undefined)
})
