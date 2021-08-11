class Player {
  constructor(){
    this.index = null;
    this.goals = 0;
    this.name = null;
    this.rank = 0;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      goals:this.goals,
      rank:this.rank,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })  
  }
  //getGoals(){
    //var getCarEndi = database.ref('CarsAtEnd');
    //getCarEndi.on("value",(data)=>{
      //this.rank = data.val();
    //})
  //}
  //static updateGoals(CAE){
    //database.ref('/').update({
      //CarsAtEnd : CAE
    //})
  //}
}
