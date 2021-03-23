var database;
var gameState = 0;
var player, playerCount, form, game;
var allPlayers
var car1, car2, car3, car4, cars;

function preload(){
    car1_img = loadImage("car1.png")
    car2_img = loadImage("car2.png")
    car3_img = loadImage("car3.png")
    car4_img = loadImage("car4.png")
    track_img = loadImage("track.jpg")
}

function setup(){
    createCanvas(displayWidth-30, displayHeight-160);
    // creating database
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
    }

function draw(){
    if(playerCount === 4){
        game.setState(1)
    }
    if(gameState === 1){
        clear()
        game.play()
    }
    if(gameState === 2){
        game.end()
    }
    }