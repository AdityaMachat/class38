class Form {
    constructor(){
        this.input =createInput("name");
        this.button =createButton("play");
        this.greeting = createElement('h3');
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title= createElement('h2');
        title.html("car racing game");
        title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-20,displayHeight/3);
        this.button.position(displayWidth/2,displayHeight/2+50);

        this.button.mousePressed( ()=>{
            this.input.hide();
            this.button.hide();

            player.name= this.input.value();
            playerCount++;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html(" hello "+player.name);
            this.greeting.position(displayWidth/2,displayHeight/4);
        })
    }
}