module.exports = commentValidator


const Validator = use('Validator')

async function commentValidator ({ comment }) {
    
    
    const rules = {
        comment:'required'

    }

    const validation = await Validator.validateAll({
        comment
    }, rules)

    return {
        error: validation.message()
    }
}