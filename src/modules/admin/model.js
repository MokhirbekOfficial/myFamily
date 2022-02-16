const { fetch, fetchAll } = require('../../utils/pg')

const AddAdmin = `
INSERT INTO blog_admin
    (admin_name,admin_password)
VALUES 
    ($1,$2)
RETURNING 
    *
`

const AllAdmin = `
SELECT
    *
FROM 
    blog_admin
WHERE
    is_super = false
`

const GetAdmin = `
SELECT
    *
FROM 
    blog_admin
WHERE
    admin_name = $1 and admin_password = $2
`

const UpdateAdmin = `
UPDATE 
    blog_admin
SET 
    admin_name = $2, admin_password = $3
WHERE 
    admin_id = $1
RETURNING 
    *
`

const DeleteAdmin = `
DELETE
FROM
    blog_admin
WHERE
    admin_id = $1
`

const addAdmin = (admin_name, admin_password) => fetch(AddAdmin, admin_name, admin_password)
const allAdmin = () => fetchAll(AllAdmin)
const getAdmin = (admin_name, admin_password) => fetch(GetAdmin, admin_name, admin_password)
const updateAdmin = () => fetch(UpdateAdmin, admin_name, admin_password, admin_id)
const deleteAdmin = (admin_id) => fetch(DeleteAdmin, admin_id)

module.exports = {
    addAdmin,
    allAdmin,
    getAdmin,
    updateAdmin,
    deleteAdmin
}