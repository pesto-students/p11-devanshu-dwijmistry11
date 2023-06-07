// Your solution goes here 

// password verification function
function isStrongPassword(pass){

    // password size verification
    if(pass.length >= 8){
        // password string search
        if(pass.toLowerCase().search('password') == -1){
            // check upper case and lower case of password
            if(Boolean(pass.match(/[A-Z]/)) & Boolean(pass.match(/[a-z]/))){
                return true;
            }
        }
    }
    return false;

}
