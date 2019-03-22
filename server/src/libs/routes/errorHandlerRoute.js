import httpStatus from 'http-status';


export default (stack = false) => (
  err,
  req,
  res,
  next, // eslint-disable-line
  ) => {
  res.status(err.status).json({
    data: err.data || [],
    message: err.isPublic ? err.message : (httpStatus)[err.status],
    stack: stack ? err.stack : '',
    status: 'error',
  });
};
