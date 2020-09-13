const Validator = use('Validator')

module.exports = async function PostValidator (data) {
    if (typeof data !== 'object') throw new Error()

    const { party_size, title, details } = data
    
    const rules = {
        party_size:'required|number',
        title:'required',
        details:'required'
    }

    const validation = await Validator.validateAll({
        party_size, title, details
    }, rules)

    return {
        error: validation.messages()
    }
}