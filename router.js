const controllerUser = require("./controller/user_list");
function getRouter(app) {
  app.get("/test", controllerUser.test);
  app.get("/api", controllerUser.get_user);
  app.post("/add_user", controllerUser.add_user);
  app.post("/check_user", controllerUser.check_user);
  app.post("/update_user", controllerUser.update_user);
  app.post("/delete_user", controllerUser.delete_user);
  app.post("/search_user", controllerUser.search_user);
}

module.exports = {
  getRouter
};
