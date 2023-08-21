function isStrongPassword(password){
    if(password.length<8 || password === 'password'){
       return false 
    }
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase() && /[A-Z]/.test(password[i])) {
          return true;
        }
    }
}

isStrongPassword('Test@123')