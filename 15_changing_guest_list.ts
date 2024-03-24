
let guest_list:string[] = ['Bilal', 'Faiza', 'Ali'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
}

let absent_guest:string = 'Bilal';

let new_guest: string = 'Ashar';

guest_list[0] = new_guest;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
}

console.log(`Mr. ${absent_guest} is not coming to the party.`)