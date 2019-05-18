$(document).ready(function () {
    var userChoice;
    var computerChoices = [];
    var opponent;
    var pokemon = {
        pikachu: {
            name: "Pikachu",
            hp: 100,
            attack: "Thunderbolt",
            attackPower: (Math.floor(Math.random() * 6) + 1) * 10,
            img: "assets/img/pikachu.png"
        },
        bulbasaur: {
            name: "Bulbasaur",
            hp: 100,
            attack: "Vine Whip",
            attackPower: (Math.floor(Math.random() * 6) + 1) * 10,
            img: "assets/img/bulbasaur.png"
        },
        charmander: {
            name: "Charmander",
            hp: 100,
            attack: "Flamethrower",
            attackPower: (Math.floor(Math.random() * 6) + 1) * 10,
            img: "assets/img/charmander.png"
        },
        squirtle: {
            name: "Squirtle",
            hp: 100,
            attack: "Water Gun",
            attackPower: (Math.floor(Math.random() * 6) + 1) * 10,
            img: "assets/img/squirtle.png"
        },
    }

    $("#pikachu").on("click", function () {
        userChoice = pokemon.pikachu;
        computerChoice(userChoice)
        startGame();


    })
    $("#bulbasaur").on("click", function () {
        userChoice = pokemon.bulbasaur;
        computerChoice(userChoice)

        startGame();

    })
    $("#charmander").on("click", function () {
        userChoice = pokemon.charmander;
        computerChoice(userChoice)

        startGame();

    })
    $("#squirtle").on("click", function () {
        userChoice = pokemon.squirtle;
        computerChoice(userChoice)

        startGame();

    })

    function startGame() {
        $("#choice-container").hide();

        //opponent
        $("#random-choice").append("<img id='opponent-img' src=" + opponent.img + ">");
        $("#random-choice").append("<h2 id='opponent-hp'>HP: " + opponent.hp + "</h2>");
        $("#random-choice").append("<h2 id='opponent-attack'>Attack: " + opponent.attack + "</h2>")
        


        //userChoice
        $("#user-choice").append("<img src=" + userChoice.img + ">");
        $("#user-choice").append("<h2 id='user-hp'>HP: " + userChoice.hp + "</h2>");
        $("#user-choice").append("<h2>Attack: " + userChoice.attack + "</h2>")
        $("#user-choice").append("<button id='attack'>ATTACK</button>")

        $("#attack").on("click", function () {
            opponent.hp = opponent.hp - userChoice.attackPower;
            userChoice.hp = userChoice.hp - opponent.attackPower;
            userChoice.attackPower = userChoice.attackPower * 2;



            $("#opponent-hp").text("HP: " + opponent.hp);
            $("#user-hp").text("HP: " + userChoice.hp);

            if(opponent.hp <= 0){
                randomOpponent();
            }

            if(userChoice.hp <= 0){
                console.log("WORKS")
                $("#battle-container").hide();
                $("body").append("<h1>YOU LOSE!</h1>")
            }
    
            if(opponent.hp <= 0 && computerChoices.length <= 1){
                $("#battle-container").hide();
                $("body").append("<h1>YOU WIN!</h1>")
            }
        })
        

    }

    function computerChoice(takenPokemon) {
        for (var i in pokemon) {
            if (pokemon[i] != takenPokemon) {
                computerChoices.push(pokemon[i])
            }
        }

        randomOpponent()
        

    }
    function randomOpponent() {
        opponent = computerChoices[Math.floor(Math.random() * computerChoices.length)]
        computerChoices.splice(computerChoices.indexOf(opponent))
        console.log(opponent)
        $("#opponent-img").attr("src", opponent.img);
        console.log(opponent.img);
        $("#opponent-hp").text('HP: ' + opponent.hp);
        console.log(opponent.hp);
        $("#opponent-attack").text('Attack: ' + opponent.attack);
        console.log(opponent.attack);
        
        
        // console.log(computerChoices)
    }

    // display hidden choices container DONE

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