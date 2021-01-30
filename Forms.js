class Form{
    constructor() {
        
    }
    display() {
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(100, 0)
        var input = createInput("Name")
        input.position(100, 50)
        var button = createButton("Play")
        button.position(280, 50)
        var greeting = createElement("h2")
        button.mousePressed(function () {
            input.hide()
            button.hide()
            var name = input.value()
            playerCount = playerCount + 1
            player.updateCount(playerCount)
            player.updateName(name)
            greeting.html("Hello " +  name)

        })
        
    }

}