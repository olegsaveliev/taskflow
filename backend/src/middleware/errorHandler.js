const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  
  if (process.env.NODE_ENV === 'development') {
    console.error('Stack:', err.stack);
  }

  const status = err.status || 500;
  const message = err.message || 'Internal server error';
  const code = err.code || 'SERVER_ERROR';

  res.status(status).json({
    success: false,
    error: { message, code }
  });
};

export default errorHandler;
