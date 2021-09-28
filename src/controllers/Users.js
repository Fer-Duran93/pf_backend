class User {
  /* -------------------- Register ---------------------- */
  registerGet(req, res) {
    res.render("register");
  }

  /* -------------------- Login ---------------------- */

  loginGet(req, res) {
    res.render("login");
  }

  mainGet(req, res) {
    res.render("main");
  }

  logout(req, res) {
    req.logout();
    res.redirect("/user/login");
  }
}

module.exports = User;
