const { addTell, allTell } = require('./model')

module.exports = {
    allTell: async(req, res) => {
        try {
            let AllTell = await allTell()
            res.status(200).send(AllTell)
        } catch (e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    addTell: async(req, res) => {
        try {
            let { tel_content } = req.body
            const newTell = await addTell(tel_content)
            res.status(200).send(newTell)
        } catch (e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}