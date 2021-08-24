class Form{

    constructor()
    {

    }

    display()
    {
        var title =creat('h2');
        title.html("car Racing Game")
        title.position(130,0);

        var input= createInput("Name");
        input.position(130,160);

        var button =createbutton("Play")
        button.position(250,200);

        var greeting =createElement('h2');

        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name =input.value();
            greeting.html("hello",+name)
            greeting.position(130,160)



        })




        
    }


    


     }
