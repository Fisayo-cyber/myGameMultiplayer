var form;
var game;
var player;
var database;
var gameState = 0
var playerCount
var allPlayers


function setup(){
    createCanvas(500,500);
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
