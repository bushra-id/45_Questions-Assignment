import { formatWithOptions } from "util";

let guest_list:string[] = ['Bilal', 'Faiza', 'Ali'];

// for(let i=0; i<guest_list.length; i++){
    // console.log('Dear Mr. ' + guest_list[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// }

let absent_guest:string = 'Bilal';
let new_guest: string = 'Ashar';
guest_list[0] = new_guest;

for(let i=0; i<guest_list.length; i++)

    // console.log('Dear Mr. ' + guest_list[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// }

// console.log(`Mr. ${absent_guest} is not coming to the party.`);

// console.log ('Good News! We find Big table so we are inviting 3 more guests.')

// array ma 3 guest add kiye hai
guest_list.unshift('Tayyaba'); // add at beginning of array
guest_list.splice(2,0,'Muhammad');  //add in between two elements
guest_list.push('Sara'); //add at end of
console.log (guest_list)
// yaha  pr mene 6 guest k array ko print krwaya hai
// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' + guest_list[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// } 
// sorry guest for not inviting
// console.log('\nSorry we can not arrange big table, only two people will be invited.');
// yaha pr mene guest remove kiye hai
while(guest_list.length > 2){
   let remove_guest = guest_list.pop();
//    console.log (`Sorry Mr. ${remove_guest}, you are not invited anymore.`);
}
// hamare bache hoe 2 invited guest
// for(let i=0; i<guest_list.length; i++){

    // console.log('Dear Mr. ' + guest_list[i] +',\n\nYou are still invited.\n\nThank You\n\n')
// }
// mene sare guest array se remove kr diye
guest_list.splice(0,2);
console.log(guest_list)

// Exercise 19

// print a message indicating the number of people you are inviting to dinner.
console.log(`Total num of guest are ${guest_list.length}`);