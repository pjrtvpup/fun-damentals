// var sugarclick = 0;
// var chocolateclick = 0;
// var lemonclick = 0;



// function sugarClick = function(clicks) {
//     sugarclick + 1;
//     document.getElementById("sugar").innerHTML = clicks;
// };


// function chocolateClick = function(clicks) {
//     chocolateclick + 1;
//     document.getElementById("chocolate").innerHTML = clicks;
// };


// function lemonClick = function(clicks) {
//     lemonclick + 1;
//     document.getElementById("lemon").innerHTML = clicks;
// };






// var ClickCounterViewModel = function() {
//     this.numberOfClicks = ko.observable(0);
 
//     this.registerClick = function() {
//         this.numberOfClicks(this.numberOfClicks() + 1);
//     };
// };





class Cookies {
    constructor(sugar,chocolate,lemon)
    this.sugar = sugar;
    this.chocolate = chocolate;
    this.lemon = lemon;
}

const sugar = new Cookies ('sugar');
const chocolate = new Cookies ('chocolate');
const lemon = new Cookies ('lemon');


