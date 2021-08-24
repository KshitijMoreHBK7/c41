class Game{

    constructor()
    {

    }


     gameState()
     {
         var gameStateRef=database.ref('gameState')
         gameStateRef.on("value",function(dat){
             gameState =data.val()

         })



     }
     update(state)
     {
         database.ref('/').update({
             gameState:state
         })


     }
     start()
     {
         if(gameState===0)
         {
             form=new Form();
             form.display()
         }



     }







    
    
    
    
    
    


}