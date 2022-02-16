const { tokenchecker } = require('./model')
const secretKey = process.env.JWT_KEY
const jwt = require('jsonwebtoken')

module.exports = {
    tokenchecker: async (req, res) => {
        try{
            let {token} = req.body
            const decoded = jwt.verify(token, secretKey)
            await tokenchecker(decoded.admin_id)
            res.status(200).send('OK')
        }catch(e){
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}