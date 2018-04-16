function validatePIN (pin) {
  var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
  return reg.test(pin);
}