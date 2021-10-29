module.exports = rawRequest => {

  const request = rawRequest.split('\r\n\r\n');
  const [method, path] = request[0].split(' ');
  const body = request[1];
  return { method, path, body };

};
