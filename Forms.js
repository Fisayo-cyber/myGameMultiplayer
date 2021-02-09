class Form{
    constructor() {
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement("h2")

    }
    display() {
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(100, 0)
        this.input.position(100, 50)
        this.button.position(280, 50)
        //'this'- is bound to the immediate higher object
        //arrow function - changes the binding of 'this' - ()=>{}
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount
            player.updateCount(playerCount)
            player.update()
            this.greeting.html("Hello " +  player.name) 

        })
        
    }

}