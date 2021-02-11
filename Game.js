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
        var xPos = 100
        var yPos;
        var index = 0;

        //player1 - car1 ,player2 -car2
        //player1 - player.index =1 , cars[0]
        //player2 - player.index =2, cars[1]

        for(var plr in allPlayers){
            //text(allPlayers[plr].name + " - " + allPlayers[plr].distance , 200 , yPos)
            yPos = height - allPlayers[plr].distance
            cars[index].x = xPos;
            cars[index].y = yPos;

            if(player.index - 1 === index){
                cars[index].shapeColor = "red"
                camera.position.y = cars[index].y
            }

            index = index + 1 
            xPos = xPos + 50   
            
        }
        


        if (keyDown('UP_ARROW')) {
            player.distance = player.distance + 50
            player.update()
        }

        console.log(allPlayers)
       drawSprites()     
    }
    
}

