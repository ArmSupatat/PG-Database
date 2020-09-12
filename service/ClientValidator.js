module.exports = clientValidator


const Validator = use('Validator')

async function clientValidator ({username, password, email, contact}) {
    
    
    const rules = {
        username:'required|unique:clients,username',
        password:'required',
        email:'required|unique:teachers,email',
        contact:'required'
        
    }

    const validation = await Validator.validateAll({
        username, password, email, contact
    }, rules)

    return {
        error: validation.message()
    }
}