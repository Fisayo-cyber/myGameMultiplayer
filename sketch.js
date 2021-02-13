var form;
var game;
var player;
var database;
var gameState = 0
var playerCount
var allPlayers
var car1, car2, car3, car4, cars
var car1Image, car2Image, car3Image, car4Image, track, ground
function preload() {
    car1Image = loadImage("images/car1.png")
    car2Image = loadImage("images/car2.png")
    car3Image = loadImage("images/car3.png")
    car4Image = loadImage("images/car4.png")
    track = loadImage("images/track.jpg")
    ground = loadImage("images/ground.png")

    
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    game = new Game()
    game.getGameState()
    game.start()

    
}



function draw(){
    background("white");
    if (playerCount === 4) {
        game.updateGameState(1)
    }

    if (gameState === 1) {
        game.play()
    }

    if (gameState === 2) {
        game.end()
    }
}
