$(document).ready(function() {
var userChoice;
var pokemon = {
    pikachu: {
        name: "Pikachu",
        hp: 50,
        attack: "Thunderbolt",
        attackPower: (Math.floor(Math.random() * 6) + 1) * 10,
        img: "assets/img/pikachu.png"
    },
    bulbasaur: {
        name: "Bulbasaur",
        hp: 50,
        attack: "Vine Whip",
        attackPower: (Math.floor(Math.random() * 6) + 1) * 10,
        img: "assets/img/bulbasaur.png"
    },
    charmander: {
        name: "Charmander",
        hp: 50,
        attack: "Flamethrower",
        attackPower: (Math.floor(Math.random() * 6) + 1) * 10,
        img: "assets/img/charmander.png"
    },
    squirtle: {
        name: "Squirtle",
        hp: 50,
        attack: "Water Gun",
        attackPower: (Math.floor(Math.random() * 6) + 1) * 10,
        img: "assets/img/squirtle.png"
    },
}

$("#pikachu").on("click", function(){
    userChoice = pokemon.pikachu;
    startGame();
    
})
$("#bulbasaur").on("click", function(){
    userChoice = pokemon.bulbasaur;
    startGame();
    
})
$("#charmander").on("click", function(){
    userChoice = pokemon.charmander;
    startGame();
    
})
$("#squirtle").on("click", function(){
    userChoice = pokemon.squirtle;
    startGame();
    
})
    
function startGame(){
    userChoiceImg = $("<img/>");
    userChoiceImg.attr('src', userChoice.img);
    $("#user-choice").append(userChoiceImg);
}
function computerChoice(){

}
    


// display hidden choices container
//even spacing with user-choice and computer choice
//start game append the hp, attack name, and attack button to user choice div
//make user choice multiply by 2 every time attack is pressed
//math.random computer choice. random index of object
//append the hp, attack name, and attack button to computer choice div
//after everytime attack is pressed computer choice hp goes down by amount of user attack power and updates number
//computer choice counter attacks
//user hp goes down user choice attack power every time attack button is hit
//once one pokemon is done go to the next
//if win say you win
//if lose say you lose
//button for restart game

    });