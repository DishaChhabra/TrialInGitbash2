class Form{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("Enter your name here")
        this.button = createButton("PLAY")
        this.greeting = createElement("h2")  
        this.restart = createButton("RESTART")
    }

    display(){
        //DOM library
        this.title.html("CAR RACING")
        this.title.position(displayWidth/2-115, 0)
        this.input.position(displayWidth/2-105,displayHeight/2-200)
        this.button.position(displayWidth/2-50,displayHeight/2-150)
        this.restart.position(displayWidth-120,20)
        this.restart.mousePressed(() => {
            player.setCount(0)
            game.setState(0)
            Player.setRank(0)
        })
        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount;
            player.setInfo()   
            player.setCount(playerCount)  
        this.greeting.html("Welcome " + player.name)
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        })
        
    }
    removeForm(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.greeting.hide()
    }
}