const { fetch, fetchAll } = require('../../utils/pg')

const AddTel = `
INSERT INTO tel
    (tel_content)
VALUES 
    ($1)
RETURNING 
    *
`

const AllTell = `
SELECT
    *
FROM 
    tel
`


const addTell = (tel_content) => fetch(AddTel, tel_content)
const allTell = () => fetchAll(AllTell)

module.exports = {
    addTell,
    allTell
}