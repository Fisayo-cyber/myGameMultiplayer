var form;
var game;
var player;
var database;
var gameState = 0
var playerCount
var allPlayers;
var car1, car2;
var car1Image, car2Image ;
var track, trackImage
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall8;
var wall9;
var wall10;
var wallsGroup;
var cars = []
var speed = 0

function preload() {
    car1Image = loadImage("images/car1.png")
    car2Image = loadImage("images/car2.png")
    trackImage = loadImage("images/Track.jpg")

}
function setup(){
    createCanvas(1200,600);
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

    if (gameState === 2) {
        game.end()
    }

    text(mouseX + ", " +mouseY, mouseX, mouseY)
}
