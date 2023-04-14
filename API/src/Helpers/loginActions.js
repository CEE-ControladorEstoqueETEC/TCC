function generatePassword(){
    
    const key = (Math.random() + 1).toString(36).substring(2).substring(0,10);
    const newPassword = key.replace('a','@').replace('x','*').replace('i','!').replace('y','4').replace('s','$')

    return newPassword;
}

export {generatePassword}