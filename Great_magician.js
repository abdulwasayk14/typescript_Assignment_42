"use strict";
// Function to show magicians' names
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Function to make magicians great
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
let magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the function to make magicians great
make_great(magicians);
// Call the function to show magicians' names after modification
show_magicians(magicians);
