class Game {
    constructor() {

    }
    getGameState(){
        db.ref('gameState').on('value', function (data){
            gs = data.val();
        })
    }
    updateGameState(state){
        db.ref('/').update({
            gameState: state
        })
    }
    start(){
        if (gs === 0){
            form = new Form();
            player = new Player();
            player.getCount();
            form.display();
            
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);

        car2 = createSprite(300,200);
        car2.addImage(car2Img);

        cars = [car1, car2];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();

        
        

        if(allPlayers){
            background(rgb(198, 135, 103));
            image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            var index = 0;
            var x = 200;
            var y;
            //console.log(allPlayers);
            for(var plr in allPlayers){
                //console.log(plr);
                index = index + 1;
                x = x + 225;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                //console.log(x);
                cars[index - 1].y = y;
                if (index === player.index){
                    //cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                    push();
                    textSize(20);
                    fill("red")
                    text(allPlayers[plr].name, x - 30, y + 100);
                    pop();
                }
            }
        }
        if (keyDown(UP_ARROW) && player.index != null){
            player.distance += 10;
            player.update();
        }
        drawSprites();
    }
}