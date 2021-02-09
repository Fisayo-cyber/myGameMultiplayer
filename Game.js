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
    }

    play() {
        form.greeting.hide();
        Player.getPlayerInfo()
        // {player1,player2,...} // name - distance

        //for-in 
        var yPos = 100
        for(var plr in allPlayers){
            text(allPlayers[plr].name + " - " + allPlayers[plr].distance , 200 , yPos)
            yPos = yPos + 30
        }




        if (keyDown('UP_ARROW')) {
            player.distance = player.distance + 50
            player.update()
        }

        console.log(allPlayers)
            
    }
    
}

