class Player{
    constructor() {
        this.name = null;
        this.index = null;
        this.xPos = 0
        this.yPos = 0
        this.rank = null;
        this.angle = 0
    }

    //get playerCount from the db
    getPlayerCount() {
        database.ref("playerCount").on("value", function (data) {
            playerCount = data.val()
        })
    }
    // update the count 
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
            
        })
    }

    getFinishedCars() {
        database.ref("finishedCars").on("value", (data)=> {
            this.rank = data.val()
        })
    }

    updateFinishedCars(rank) {
        database.ref('/').update({
            finishedCars: rank
        })

    }
    //update the name .. form a new node - player1 , player2 ... - child node name -
    update() {
        //parent node - players - child nodes like player1, player2 ... 
        // player1, player2 - "player" + playerCount
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name, 
            xPos: this.xPos,
            yPos: this.yPos,
            rank: this.rank,
            angle: this.angle
        })
    }
    //it is related to all the players - 
    //static function - related to the class itself - not an object.
    static getPlayerInfo() {
        database.ref('players').on('value', function (data){
            allPlayers = data.val()
        })
    }
}