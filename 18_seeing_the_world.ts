
// store the location in a array. Make sure the array is not alphabetical order.
let places: string[] = ['London', 'Paris', 'Tokyo','Germany', 'Japan'];

// print your Array in its original order 
console.log('original '+ places);

// print your array in alphabetical order without modifying the actual list.
console.log('copy '+ [...places].sort());

// show that your array is still in its original order by printing it.
console.log('original '+ places);

// print your array in reverse alphabetical order without  changing the original list.
console.log('copy '+ [...places].sort().reverse());

// show that your array is still in original order by printing it.
console.log('original '+ places);

// reverse the order of your list.Print the array to show that its order has changed.
console.log('original '+ places.reverse());

// reverse the order of your list again.Print the list to show its back to its original order.
console.log('original '+ places.reverse());

// sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
console.log('original '+ places.sort());

// sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original '+ places.sort().reverse());