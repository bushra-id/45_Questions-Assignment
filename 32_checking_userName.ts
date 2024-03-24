
let current_username:string[] = ['Saba', 'SaNa','Sara','SaFa'];

let new_users:string[] = ['Safa', 'Aiman','Shibra','SaBa'];

new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();

    if(current_username.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not availible.Please write a different username`);
    }
    else{
        console.log(`The username ${newUsername} is available.`);
    }
})