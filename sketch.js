var form;
var game;
var player;
var database;
var gameState = 0
var playerCount
var allPlayers
var car1, car2, car3, car4, cars


function setup(){
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    game = new Game()
    game.getGameState()
    game.start()

    
}

function draw(){
    background("white");
    if (playerCount === 2) {
        game.updateGameState(1)
    }

    if (gameState === 1) {
        game.play()
    }
}
