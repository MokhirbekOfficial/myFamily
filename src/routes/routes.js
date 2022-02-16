const { Router } = require("express");
const router = new Router();
const Admin = require('../modules/admin/admin')
const { AUTH_SUPER_ADMIN } = require('../middleware/checkroleMiddleware')

router
    .post("/register", AUTH_SUPER_ADMIN, Admin.addAdmin)
    .post("/login", Admin.adminChecker)
    .get("/admin", Admin.allAdmin)
    .delete("/admin/delete", Admin.deleteAdmin)
    .put("/admin/update", Admin.updateAdmin)

module.exports = router;