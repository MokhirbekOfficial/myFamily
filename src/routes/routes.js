const { Router } = require("express");
const router = new Router();
const Admin = require('../modules/admin/admin')
const Tell = require('../modules/tell/tell')
const { AUTH_SUPER_ADMIN } = require('../middleware/checkroleMiddleware')

router

// Admin
    .post("/register", AUTH_SUPER_ADMIN, Admin.addAdmin)
    .post("/login", Admin.adminChecker)
    .get("/admin", Admin.allAdmin)
    .delete("/admin", Admin.deleteAdmin)
    .put("/admin", Admin.updateAdmin)
    // Tell
    .post("/tell", Tell.addTell)
    .get("/tell", AUTH_SUPER_ADMIN, Tell.allTell)

module.exports = router;