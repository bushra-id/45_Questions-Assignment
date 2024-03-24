let personName:string= '';

personName = prompt ('what is your name?') || '';

if (personName !== null && personName!== ''){
    alert(`hello ${personName},would you learn some python today?`)
}
else {
    'you have to fill your name !'
}