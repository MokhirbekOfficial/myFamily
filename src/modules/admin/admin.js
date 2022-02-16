const { addAdmin, allAdmin, getAdmin, updateAdmin, deleteAdmin } = require('./model')
const secretKey = process.env.JWT_KEY
const jwt = require('jsonwebtoken')

module.exports = {

    allAdmin: async(req, res) => {
        try {
            let AllAdmin = await allAdmin()
            res.status(200).send(AllAdmin)
        } catch (e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    addAdmin: async(req, res) => {
        try {
            let { admin_name, admin_password } = req.body
            const newAdmin = await addAdmin(admin_name, admin_password)
            if (newAdmin) {
                const token = jwt.sign(newAdmin, secretKey);
                res.status(302).json({ token, is_super: newAdmin.is_super, message: "You authed in!" });
            } else {
                res
                    .status(401)
                    .json({ message: "You are not authed in, please try again!" });
            }
        } catch (e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    adminChecker: async(req, res) => {
        try {
            let { admin_name, admin_password } = req.body
            let Admin = await getAdmin(admin_name, admin_password)
            if (Admin) {
                let admin_id = Admin.admin_id
                const token = jwt.sign({ admin_id, is_super: Admin.is_super }, secretKey)
                let obj = {
                    token: token,
                    is_super: Admin.is_super
                }
                return res.status(200).send(obj)
            }
            res.status(400).send('Wrong login or password!')
        } catch (e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    updateAdmin: async(req, res) => {
        try {
            let { admin_name, admin_password, admin_id } = req.body
            await updateAdmin(admin_name, admin_password, admin_id)
            res.status(201).send('Update admin!')
        } catch (e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    deleteAdmin: async(req, res) => {
        try {
            let { admin_id } = req.body
            await deleteAdmin(admin_id)
            res.status(200).send('Admin is deleted successfully!')
        } catch (e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}