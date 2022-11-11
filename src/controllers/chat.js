const ChatController = {
  index(req, res) {
    const { user } = req.session
    const { email } = req.params
    res.render('chat', { user, email })
  }
}

export default ChatController