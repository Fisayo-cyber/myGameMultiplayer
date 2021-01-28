var ball, position;
// database - collection of data - store position of ball
//realtime database - 

//read the data - write the data
var database;

// to read data - create a listener-turn it on .. database.ref('/').on("value", function(data){})

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    //listener - will listen to any changes in the node in db and trigger a function

    var ballPosRef = database.ref("Ball/Position")

    ballPosRef.on("value",readPosition)

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if (position !== undefined) {
        
    
        if (keyDown(LEFT_ARROW)) {
            writePosition(-1, 0);
        }
        else if (keyDown(RIGHT_ARROW)) {
            writePosition(1, 0);
        }
        else if (keyDown(UP_ARROW)) {
            writePosition(0, -1);
        }
        else if (keyDown(DOWN_ARROW)) {
            writePosition(0, +1);
        }
        drawSprites();
    }
}
// write data - make changes in the db
function writePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref("Ball/Position").set({
        x: position.x + x,
        y: position.y + y
    })
    
}

// read data - get data from the db
function readPosition(data) {
    position = data.val()
    console.log(position)
    ball.x = position.x
    ball.y = position.y
}