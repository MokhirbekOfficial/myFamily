const { verify } = require("../utils/jwt");

module.exports = {
    AUTH_SUPER_ADMIN: (req, res, next) => {
        try {
            const { token } = req.headers;
            const { is_super } = verify(token);
            if (!is_super)
                return res
                    .status(401)
                    .json({ message: "Login or Register!" });

            next();
        } catch (error) {
            return res
                .status(401)
                .json({ message: "Login or Register!" });
        }
    }
};