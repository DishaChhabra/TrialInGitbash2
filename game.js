class Game{
    constructor(){
        
    }

    // read the gameState from database
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })  
    }

    // write the gameState in database
    setState(state){
        database.ref("/").update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player()
            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car2= createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        car1.addImage(car1_img)
        car2.addImage(car2_img)
        car3.addImage(car3_img)
        car4.addImage(car4_img)

        cars = [car1, car2, car3, car4]
    }

    play(){
        form.removeForm()
        Player.getPlayersInfo()
        if(allPlayers != undefined){
            background("black")
            image(track_img,0,-displayHeight*4, displayWidth, displayHeight*5)
            var index = 0
            var x = 175
            var y
            for(var i in allPlayers){
            // index is position of object. For example 1 = [1]
                index++
                x = x+200
                y = displayHeight-allPlayers[i].distance
                cars[index-1].x = x
                cars[index-1].y = y
                if(index === player.index){
                    fill("white")
                    ellipse(x,y, 60)
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
            }
        }
        if(keyDown("up") && player.index != null){
            player.distance = player.distance + 10
            player.setInfo()
        }
        player.getRank()
        if(player.distance>3720){
            gameState = 2;
            player.rank++
            Player.setRank(player.rank)
        }
        
        drawSprites()
    }

    end(){
        console.log("GAME OVER")
        console.log(player.rank)
    }
    
}