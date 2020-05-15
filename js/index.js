window.addEventListener("load", () =>{
    const sound = document.querySelectorAll(".sound");
    const keyboard = document.querySelectorAll(".keyboard div");

    keyboard.forEach((key,index)=>{
        key.addEventListener("click", function(){
            sound[index].currentTime = 0;
            sound[index].play();
        
        });
    });

    document.addEventListener("keydown", function(e){
        
        if(e.keyCode == 81){
            sound[0].currentTime = 0;
            sound[0].play();
            document.getElementsByClassName("footer").style.background = 'blue';
        }
        if(e.keyCode == 50){
            sound[1].currentTime = 0;
            sound[1].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 87){
            sound[2].currentTime = 0;
            sound[2].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 51){
            sound[3].currentTime = 0;
            sound[3].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 69){
            sound[4].currentTime = 0;
            sound[4].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 82){
            sound[5].currentTime = 0;
            sound[5].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 53){
            sound[6].currentTime = 0;
            sound[6].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 84){
            sound[7].currentTime = 0;
            sound[7].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 54){
            sound[8].currentTime = 0;
            sound[8].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 89){
            sound[9].currentTime = 0;
            sound[9].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 55){
            sound[10].currentTime = 0;
            sound[10].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 85){
            sound[11].currentTime = 0;
            sound[11].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 73){
            sound[12].currentTime = 0;
            sound[12].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 57){
            sound[13].currentTime = 0;
            sound[13].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 79){
            sound[14].currentTime = 0;
            sound[14].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 48){
            sound[15].currentTime = 0;
            sound[15].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
        if(e.keyCode == 80){
            sound[16].currentTime = 0;
            sound[16].play();
            document.getElementsById("w1").style = "background: yellow;";
        }
    });
});
