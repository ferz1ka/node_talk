const ContactController = {
  list(req, res) {
    const { user } = req.session
    const contacts = user.contacts
    res.render('contactsList', { user, contacts })
  },

  show(req, res) {
    const { id } = req.params
    const { user } = req.session
    const contact = user?.contacts?.[id]
    res.render('contactsShow', { contact, id })
  },

  edit(req, res) {
    const { id } = req.params
    const { user } = req.session
    const contact = user?.contacts?.[id]
    res.render('contactsEdit', { contact, id })
  },

  create(req, res) {
    const contact = req.body
    const { user } = req.session
    user.contacts.push(contact)
    res.redirect('/contacts');
  },

  update(req, res) {
    const { id } = req.params
    const contact = req.body
    const { user } = req.session
    user.contacts[id] = contact
    res.redirect('/contacts')
  },

  delete(req, res) {
    const { id } = req.params
    const { user } = req.session
    user.contacts.splice(id, 1)
    res.redirect('/contacts')
  },
}

export default ContactController