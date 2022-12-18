export const checkValidEmail = (email) => {
    let flag = false;
    if(email.includes('@') && email.includes('.com') && email.length > 4){
        flag = true;
    }
    return flag;
}