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
        computerChoice(userChoice);
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

        // opponent
        $("#random-choice").append("<img id='opponent-img' src=" + opponent.img + ">");
        $("#random-choice").append("<h2 id='opponent-hp'>HP: " + opponent.hp + "</h2>");
        $("#random-choice").append("<h2 id='opponent-attack'>Attack: " + opponent.attack + "</h2>")



        // //userChoice
        $("#user-choice").append("<img src=" + userChoice.img + ">");
        $("#user-choice").append("<h2 id='user-hp'>HP: " + userChoice.hp + "</h2>");
        $("#user-choice").append("<h2>Attack: " + userChoice.attack + "</h2>")
        $("#user-choice").append("<button id='attack'>ATTACK</button>")

        $("#attack").on("click", function () {
            opponent.hp = opponent.hp - userChoice.attackPower;
            console.log(opponent.hp)
            
            userChoice.hp = userChoice.hp - opponent.attackPower;
            userChoice.attackPower = userChoice.attackPower * 20;

           

            $("#opponent-hp").text("HP: " + opponent.hp);
            $("#user-hp").text("HP: " + userChoice.hp);
            if(opponent.hp <= 0){
                newOpponent();
            }
            if(userChoice.hp <= 0 && opponent.hp <= 0){
                $("#battle-container").hide();
                $("body").append("<h1>IT'S A DRAW!</h1>")
            }

            if(userChoice.hp <= 0 && opponent.hp > 0){
                $("#battle-container").hide();
                $("body").append("<h1>YOU LOSE!</h1>")
            }

            if(opponent.hp <= 0 && computerChoices.length <= 1 && userChoice.hp > 0){
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
        // console.log(computerChoices)

        


    }
    function newOpponent(){
        opponent = computerChoices[Math.floor(Math.random() * computerChoices.length)]
        console.log(computerChoices)

        computerChoices.splice(computerChoices.indexOf(opponent), 1)
        console.log(opponent)
        $("#opponent-img").attr("src", opponent.img);
       
        $("#opponent-hp").text('HP: ' + opponent.hp);
       
        $("#opponent-attack").text('Attack: ' + opponent.attack);
        
    }


});