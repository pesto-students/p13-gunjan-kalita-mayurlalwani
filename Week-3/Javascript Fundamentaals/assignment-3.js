function isStrongPassword(password) {
  const isLengthValid = password.length >= 8;
  const containsPassword = password.includes("password");
  const hasUppercase = /[A-Z]/.test(password);
  return isLengthValid && !containsPassword && hasUppercase;
}

console.log(isStrongPassword("Qwerty")); // false - Too short
console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
console.log(isStrongPassword("Qwerty123")); // true
