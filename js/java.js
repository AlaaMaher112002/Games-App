const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c96de3a5cmsh948906003ebd439p13c6a7jsn5f62f9c21e0c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
var games=[];
async function getGame(){
    var response=await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=Shooter', options);
    var games=await response.json();
    console.log(games);
    display(games)
}
getGame();

function display(games){
    console.log(games);
    var cols=document.createElement('div');
    for(var i=0;i<games.length;i++){
        cols.innerHTML+=`
        <div class="col-md-3">
        <div class="game overflow-hidden ">  
        <img class="w-100  recipesStyle" src="${games[i][game_url]}" id="img">
        <h6 class="pt-4">${games[i][title]}</h6>
        <h5>${games[i][short_description] }</h5>   
        </div>
        </div>
        `
        console.log(cols,"coll");
    }
    
    var GameInfo=document.getElementById('gamesData')
        GameInfo.appendChild(cols)

// console.log("displayyyyyyyyyyyyyy")

}


































// getGame('Shooter')

// var links=document.querySelectorAll('.navbar .nav-link');
// for(var i=0;i<links.length;i++){
//     links[i].addEventListener('click',function(e){
//         getGame(e.target.text);
//     })
// }

// var games=[];
// async function getGame(game){
//     var response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`, options);
//     var games=await response.json();
//     console.log(games);
    
 
// }

// function display(){
//     var cols='';
//     for(var i=0;i<games.length;i++){
//         cols+=`
//         <div class="col-md-3 pt-3">
//         <div class="recipe overflow-hidden ">  
//         <img class="w-100  recipesStyle" src="${games[i].game_url}" id="img">
//         <h6 class="pt-4">${games[i].title}</h6>
//         <h5>${games[i].short_description }</h5>
//          <a  class="btn text-light my-3">${games[i].platform}</a>
//          <a  onclick='getDetails(${games[i].id})'  class="btn text-light my-3" target="_blank"> Details</a>
        
         
//         </div>
//         </div>
//         `
//     }
// document.getElementById('gamesData').innerHTML=cols;

// }


// async function getDetails(gameId){
// var response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,options);
// var gameDetails=await response.json();
// var gameDetails=gameDetails.recipe;
// var game=`
// <img class="w-100 py-3 recipesStyle " src="${gameDetails.image_url}" id="img">
// <h3>${recipeDetails.publisher}</h3>
// <h4>${recipeDetails.title}</h4>
// <h6>${recipeDetails.ingredients}</h6>
// `
// document.getElementById('gameInfo').innerHTML=game;

// }  