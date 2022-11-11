const error = {
  notFount(req, res, next) {
    res.status(404);
    res.render('not-found')
  },

  serverError(error, req, res, next) {
    res.status(500)
    res.render('server-error', { error })
  }
}

export default error