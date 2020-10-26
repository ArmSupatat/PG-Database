"use strict";

const Database = use("Database");
const User = use("App/Models/User");
const UserValidator = require("../../../service/ClientValidator");
const Hash = use("Hash");

function numberTypeParamValidator(number) {
  if (Number.isNaN(parseInt(number)))
    return {
      error:
        "param: ${number} is not a number, please use number type param instead.",
    };
  // throw new Error('Please use number as a param')
  return {};
}

class UserController {
  async index() {
    const Users = await User.all();

    return { status: 200, error: undefined, data: Users };
  }

  async show({ request }) {
    const { id } = request.params;

    const validateValue = numberTypeParamValidator(id);

    if (validateValue.error)
      return { status: 500, error: validateValue.error, data: undefined };

    const user = await User.find(id);

    return { status: 200, error: undefined, data: user || {} };
  }

  async store({ request, response }) {
    const { username, password, email, contact } = request.body;

    const validatedData = await UserValidator(request.body);

    if (validatedData.error)
      return response
        .status(422)
        .send({ status: 422, error: validatedData.error, data: undefined });

    const user = await User.create({ username, email, contact, password });

    return response.send({
      status: 200,
      error: undefined,
      data: {
        username,
        email,
        contact
      },
    });
  }

  async update({ request }) {
    const { body, params } = request;
    const { id } = params;
    const { username, email, contact } = body;

    const UserId = await Database.table("Users")
      .where({ user_id: id })
      .update({ username, email, contact });

    const User = await Database.table("Users")
      .where({ user_id: UserId })
      .first();

    return {
      status: 200,
      error: undefined,
      data: { username, email, contact },
    };
  }
  async destroy({ request }) {
    const { id } = request.params;

    await Database.table("Users").where({ user_id: id }).delete();

    return { status: 200, error: undefined, data: { message: "success" } };
  }
}

module.exports = UserController;
