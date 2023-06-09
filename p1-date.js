/*
    CIT 281 Project 1
    Name: Madisen Meli
*/

const today = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
let d = new Date ();
let day = today[d.getDay()];
console.log(day);