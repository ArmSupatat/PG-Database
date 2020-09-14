const Validator = use('Validator')
const Database = use('Database')

module.exports = async function PostValidator (data) {
    if (typeof data !== 'object') throw new Error()

    const { user_id, post_id } = data
    
    const rules = {
        user_id:'required|number',
        post_id:'required|number'
    }

    // const user_id = await Database
    //     .table('client_join_posts')
    //     .where({ join_id: id })
    //     .delete()
    
    // if (user_id === user_id)

    const validation = await Validator.validateAll({
        user_id, post_id
    }, rules)

    return {
        error: validation.messages()
    }
}