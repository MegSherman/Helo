module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get ('db')
        const {userposts, search} = req.query
        const {id} = req.session.user
        const allPosts = await db.posts_list()

        if (userposts === 'true' && search) {
            let userSearchPosts = allPosts.filter (e => {
                return e.title.toLowerCase().includes(search.toLowerCase())
            })
            return res.status(200).send(userSearchPosts)
            
        } else if (userposts === 'false' && !search) {
            let noUserPosts = allPosts.filter (e => {
                return e.id !== id
            })
            return res.status(200).send(noUserPosts)

        } else if (userposts === 'false' && search) {
            let noUserSearchPosts = allPosts.filter (e => {
                return e.id !== id && e.title.toLowerCase().includes(search.toLowerCase())
            })
            return res.status(200).send(noUserSearchPosts)

        } else if (userposts === 'true' && !search) {
            return res.status(200).send(allPosts)

        } else {
            console.log('Heres the else')
            return res.status(404).send('No posts found.')
        }
    }
}