class Game{
    constructor() {
        
    }
    // get gameState from the db
    getGameState() {
        database.ref("gameState").on("value", function (data){
            gameState = data.val();
        })
    }
    
    
    // update the gameState in the db
    updateGameState(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getPlayerCount();

            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 400, 20, 20)
        car2 = createSprite(150, 400, 20, 20)
        car3 = createSprite(200, 400, 20, 20)
        car4 = createSprite(250, 400, 20, 20)
        cars = [car1, car2, car3, car4]
        car1.addImage(car1Image)
        car2.addImage(car2Image)
        car3.addImage(car3Image)
        car4.addImage(car4Image)
    }

    play() {
        form.greeting.hide();
        Player.getPlayerInfo()
        // {player1,player2,...} // name - distance
        /* {
            player1 : name : ""
                      distance : 0
        }
        */
        //for-in - loop through an object - JSON object or an array
        var xPos = 350
        var yPos;
        var index = 0;

        //player1 - car1 ,player2 -car2
        //player1 - player.index =1 , cars[0]
        //player2 - player.index =2, cars[1]
        //display the track
        image(track, 0, -6 * height, width, 7 * height)
        for (var plr in allPlayers) {
            //text(allPlayers[plr].name + " - " + allPlayers[plr].distance , 200 , yPos)
            yPos = height - allPlayers[plr].distance
            cars[index].x = xPos;
            cars[index].y = yPos;

            //for the 3rd player to join the game - player.index = 3, cars index = 2
            if (player.index - 1 === index) {
                fill("red")
                circle(xPos, yPos, 100)
                camera.position.y = cars[index].y - height / 2 + 100
            }

            index = index + 1
            xPos = xPos + 215
            
        }
        
        //update distance when up arrow is pressed
        if (keyDown('UP_ARROW')) {
            player.distance = player.distance + 50
            player.update()
        }

        console.log(player.distance)

        
        drawSprites()
       
        if (player.distance > 4300) {
           gameState = 2 
        }
    }

    end() {
        console.log("Game ended")
    }
}

