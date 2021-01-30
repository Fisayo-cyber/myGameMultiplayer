class Player{
    constructor() {
        
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
    //update the name .. form a new node - player1 , player2 ... - child node name -
    updateName(name) {
        // player1, player2 - "player" + playerCount
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set({
            name: name
        })
    }
}