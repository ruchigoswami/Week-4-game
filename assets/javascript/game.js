$(document).ready(function() {
  // define global variables.	
  var random_num = Math.floor(Math.random() * 100) + 10 ;
     console.log("Random number :" +random_num);
  var your_score=0;   
  var win = 0;
  var lose = 0;
  var red = Math.floor(Math.random() * 10) + 1 ;
     console.log("Red :" +red);
  var yellow = Math.floor(Math.random() * 10) + 1 ;
     console.log("yellow :" +yellow);
  var blue = Math.floor(Math.random() * 10) + 1 ;
     console.log("blue :" +blue);
  var green = Math.floor(Math.random() * 10) + 1 ;
     console.log("Green :" +green);
  $("#random_div").text(random_num);
  $("#win_div").text(win);
  $("#lose_div").text(lose);
  $("#your_div").text(your_score);
//this function reset the game for replay.
function reload(){
  random_num = Math.floor(Math.random() * 100) + 10 ;
      console.log("Random number :" +random_num);
  your_score =0;   
  red = Math.floor(Math.random() * 10) + 1 ;
      console.log("Red :" +red);
  yellow = Math.floor(Math.random() * 10) + 1 ;
      console.log("yellow :" +yellow);
  blue = Math.floor(Math.random() * 10) + 1 ;
      console.log("blue :" +blue);
  green = Math.floor(Math.random() * 10) + 1 ;
      console.log("Green :" +green);
  $("#random_div").text(random_num);
  $("#your_div").text(your_score);
};
//This function increase the win count.
function won(){
	win++;
	$("#win_div").text(win);
	reload();
};

//This function increases the losses count.
function losses(){
	lose++;
	$("#lose_div").text(lose);
	reload();
};

$("#red_crystal").on("click",function(){
	 play_game(red);	
    });
$("#blue_crystal").on("click",function(){
   		 play_game(blue);
    });
$("#green_crystal").on("click",function(){
        play_game(green);
    });
$("#yellow_crystal").on("click",function(){
    	 play_game(yellow);
    });

function play_game(score){
  		your_score = score + your_score;
        $("#your_div").text(your_score);

        if(your_score==random_num)
         {
        	won();
         }
        else if (your_score>random_num)
         {
        	losses();
         }
};




   
});