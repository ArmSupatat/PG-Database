'use strict'
const Hash = use('Hash')
const Client = use('App/Models/Client')
class AuthController {
     async login({ request , auth }){
       const {username, password} = request.body

       const client = await Client.findBy('username', username)
       const hashPassword = await Hash.verify(password,client.password)

        if(hashPassword){
           return {status:'Login successful', data: {username}}
        }
        else{
         return {status:'Login failed'}
       }
    }
}
module.exports = AuthController
