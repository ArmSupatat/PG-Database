const Validator = use('Validator')

module.exports = async function AuthValidator (data) {
    if (typeof data !== 'object') throw new Error()

    const { username, password } = data
    
    const rules = {
        username:'required',
        password:'required'
    }

    const validation = await Validator.validateAll({
        username, password
    }, rules)

    return {
        error: validation.messages()
    }
}