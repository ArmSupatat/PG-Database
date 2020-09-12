module.exports = postValidator


const Validator = use('Validator')

async function postValidator ({party_size, title, details}) {
    
    
    const rules = {
        party_size:'required',
        title:'required',
        details:'required'
        
    }

    const validation = await Validator.validateAll({
        party_size, title, details
    }, rules)

    return {
        error: validation.message()
    }
}