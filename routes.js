const controller = require("./controller");

module.exports = function(app) {
    app.get("api/user/:id", controller.getRoster)
    app.post("api/user/create", controller.createUser)
    app.put("api/player/delete", controller.delete)
}
