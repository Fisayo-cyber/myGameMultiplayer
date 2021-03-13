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
        car1 = createSprite(403, 124, 70, 70)
        car1.addImage(car1Image)
        car1.scale = 0.55
        car1.rotation  = 90
        car2 = createSprite(403, 130, 70, 70)
        car2.addImage(car2Image)
        car2.scale = 0.55
        car2.rotation = 90
        cars = [car1, car2]
        car1.depth = 3
        car2.depth = 3
        

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
        wallsGroup.setVisibleEach(false) 


        //make checkpoints
        checkPoint1 = createSprite(645, 250, 10, 90)
        checkPoint1.visible = false
        checkPoint2 = createSprite(645, 490, 10, 90)
        checkPoint2.visible = false
        checkPoint3 = createSprite(365, 130, 10, 90)
        checkPoint3.visible = false
    }

    play() {
        form.greeting.hide();
        Player.getPlayerInfo()
        player.getFinishedCars()
        
        cars[player.index - 1].depth = 2
        console.log(car1.depth+","+ car2.depth)
        player.xPos = cars[player.index - 1].x
        player.yPos = cars[player.index - 1].y
        
        if (keyDown("LEFT_ARROW")) {
            player.angle -= 1
            player.update()
        }

        if (keyDown("RIGHT_ARROW")) {
            player.angle += 1
            player.update()
        }

        if (keyDown("UP_ARROW") && speed <= 3.5) {
            speed += 0.1
        }

        else {
            if (speed > 0) {
                speed -= 1
            }
            
            else {
                speed = 0
            }

        }

        

        cars[player.index - 1].setSpeedAndDirection(speed, player.angle - 90)
        
        if (cars[player.index-1].isTouching(wallsGroup)) {
            player.xPos = 403
            player.yPos = 130
            player.angle = 90
            check = 0
            console.log("HEY")
            sound.play()
        }
        if (cars[player.index-1].isTouching(checkPoint1)&& check === 0) {
            check = 1
        }

        if (cars[player.index - 1].isTouching(checkPoint2) && check === 1) {
            check = 2
        }

        if (cars[player.index - 1].isTouching(checkPoint3) && check === 2) {
            gameState = 2
            player.rank += 1
            player.updateFinishedCars(player.rank)
            player.update()
            finishedSound.play()
        }
        console.log(check);
        player.update()


        var index = 0;
        for (var plr in allPlayers) {
            //display the cars according to database values 
            cars[index].x = allPlayers[plr].xPos
            cars[index].y = allPlayers[plr].yPos
            cars[index].rotation = allPlayers[plr].angle
            index += 1

        }
        
        //controls for the car
       
        drawSprites()
    }

    end() {
        Player.getPlayerInfo()
        console.log("You have finished the race")

        var y = 300
        for(var plr in allPlayers){
            text(allPlayers[plr].name + ", " + allPlayers[plr].rank, 600, y)
            y += 30
        }
        
    }
}

