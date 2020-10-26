"use strict";
const Hash = use("Hash");
const User= use("App/Models/User");
const AuthValidator = require("../../../service/AuthValidator.js");

class AuthController {
  //  async login({ request }){
  //    const {username, password} = request.body
  //    const client = await Client.findBy('username', username)
  //    const hashPassword = await Hash.verify(password,client.password)

  //     if(hashPassword) {
  //        return {status:'Login successful', data: {username}}
  //     }
  //     else{
  //      return {status:'Login failed'}
  //    }
  // }
  async login({ request, response, auth }) {
    const { username, password } = request.body;
    // const client = await Client.findBy('username', username)
    // const hashPassword = await Hash.verify(password,client.password)
    try {
      await auth.attempt(username, password);
      const { user_id} = await User.findByOrFail({ username})

      return response.send({ status: 200, error: undefined, user: { username, user_id }});
    } catch (e) {
      return response.status(403).send({
        status: 403,
        error: e.toString(),
        data: undefined,
      });
    }
  }
}
module.exports = AuthController;
// Hello Armseed
