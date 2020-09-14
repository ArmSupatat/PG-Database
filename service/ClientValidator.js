const Validator = use('Validator')

module.exports = async function ClientValidator (data) {
    if (typeof data !== 'object') throw new Error()

    const { username, password, email, contact } = data

    const rules = {
        username:'required|unique:clients,username',
        password:'required|min:8',
        email:'required|email|unique:clients,email',
        contact:'required'
    }

    const validation = await Validator.validateAll({
        username, password, email, contact
    }, rules)

    return {
        error: validation.messages()
    }
}