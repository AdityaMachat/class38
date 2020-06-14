var ball;
var database,position;


function setup(){
    createCanvas(500,500);
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    var Position=database.ref('ball/position');
    Position.on("value",readPos,showError);
}

function draw(){
    background("white");
    if(position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function writePosition(x,y){
    database.ref("ball/position").set({
    x:ball.x+x,
    y:ball.y+y
   })
} 
function readPos(data){
   position=data.val();
   ball.x=position.x;
   ball.y=position.y;

   
}
function showError(){
    console.log("there was an error");
}

