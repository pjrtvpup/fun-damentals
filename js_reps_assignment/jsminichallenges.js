// Problem 1 //

var MK = 10;
var	Josh = 11;

function mjAdd(){
return (MK + Josh);
};

console.log(mjAdd());

//

var str1 = "Wawa";
var str2 = " Is Good"; 
console.log (str1 + str2);


// Problem 2 //


var music_genres = ["Ambient", "Experimental", "Post-Punk", "Folk"];
var music_ilike = ["Deerhoof", "Ohbliv", "Can", "Aphex Twin"];

var music = [music_genres, music_ilike];

//

console.log(music[0][2]);
console.log(music[1][0]);

// Problem 3 //

var testOne = 47

if (testOne < 100){
	alert ("Your variable is less than 100!")
} else{
	alert ("Your variable is " + testOne +
		" and is greater than 100!");
};

// Problem 4 // 

function nameGrab (name){
	return name;
};

// Problem 5 //

function openDoor (door) {
	if (door === 1) {
		return ("You've opened Door 1 and have won a good prize!")
	} else if (door === 2) {
		return ("You've opened Door 2 and have won a great prize!")
	} else if (door === 3) {
		return ("You've opened Door 3 and have won the best prize!")
	};
};

