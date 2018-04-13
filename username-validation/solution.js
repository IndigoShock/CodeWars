function validateUsr(username) {
  res = /^[a-z_0-9]{4,16}$/.test(username);
  return res;
}