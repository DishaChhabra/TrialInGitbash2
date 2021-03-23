class Player{
    constructor(){
       this.index = null
       this.name = null
       this.distance = 0
       this.rank = null
    }

    // read the player count from database
    getCount(){
        database.ref("playerCount").on("value", function(data){
        playerCount = data.val()
        })  
    }

    // write the player count in database
    setCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    //write the name and distance of the players
    setInfo(){
        database.ref("Players/player" + this.index).set({
            name: this.name,
            distance: this.distance
        })
    }

    //collect all the players infos
    static getPlayersInfo(){
        database.ref("Players").on("value", (data)=>{
        allPlayers = data.val() 
         })
    }
    
    getRank(){
        database.ref("CarsAtEnd").on("value", (data)=>{
        this.rank = data.val()
        })  
    }

    // write the player count in database
    static setRank(rank){
        database.ref("/").update({
            CarsAtEnd: rank
        })
    }
}