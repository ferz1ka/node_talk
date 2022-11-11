const HomeController = {
  index(req, res) {
    res.render('home')
  },

  login(req, res) {
    const { name, email } = req.body
    if (name && email) {
      req.session.user = {
        name,
        email,
        contacts: [],
      }
      res.redirect('/contacts')
    } else {
      res.redirect('/')
    }
  },

  logout(req, res) {
    req.session.destroy();
    res.redirect('/')
  }
}

export default HomeController