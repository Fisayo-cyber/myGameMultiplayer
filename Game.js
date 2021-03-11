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
        
        //make track
        track = createSprite(600, 300, 60, 60)
        track.addImage(trackImage)
        
        //make cars

        //make walls
        
        wallsGroup = new Group()
  
  
        //outside walls
        wall1 = createSprite(600, 83, 680, 10)
        wall2 = createSprite(600, 527, 680, 10)
        wall3 = createSprite(259, 300, 10, 470)
        wall4 = createSprite(944, 300, 10, 470)

        //thick top and bottom walls
        wall5 = createSprite(600, 187, 480, 40)
        wall6 = createSprite(600, 428, 480, 40)
        
        //center thick wall
        wall7 = createSprite(720, 310, 450, 35)

        //inside walls
        wall8 = createSprite(355, 310, 10, 280)
        
        wallsGroup.add(wall1)
        wallsGroup.add(wall2)
        wallsGroup.add(wall3)
        wallsGroup.add(wall4)
        wallsGroup.add(wall5)
        wallsGroup.add(wall6)
        wallsGroup.add(wall7)
        wallsGroup.add(wall8)



    }

    play() {
        form.greeting.hide();
        Player.getPlayerInfo()
        player.getFinishedCars()
       
        
        for (var plr in allPlayers) {
           
            
        }
        
        //controls for the car
        
    }

    end() {
        
    }
}

