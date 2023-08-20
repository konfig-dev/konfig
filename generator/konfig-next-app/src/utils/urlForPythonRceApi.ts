export const urlForPythonRceApi = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8000' // you have to use 12.0.0.1 in node >= 18
    : `http://${process.env.PYTHON_RCE_API_HOST_PORT}`
}
